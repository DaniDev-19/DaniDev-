"use server";

import axios from "axios";
import { cache } from "react";

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    Accept: "application/vnd.github.v3+json",
  },
});

export const getGithubStats = cache(async () => {
  if (!username) {
    console.warn("GITHUB_USERNAME not found in environment variables");
    return null;
  }

  try {
    // Fetch user basic info
    const userResponse = await githubApi.get(`/users/${username}`);
    const userData = userResponse.data;

    // Fetch repos to calculate stars
    // Note: Default is 30 repos per page, we might need more if the user has many
    const reposResponse = await githubApi.get(
      `/users/${username}/repos?per_page=100`
    );
    const reposData = reposResponse.data;

    const totalStars = reposData.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0
    );

    // Fetch total commits using Search API
    const commitsResponse = await githubApi.get(
      `/search/commits?q=author:${username}`
    );
    const totalCommits = commitsResponse.data.total_count;

    return {
      commits: totalCommits,
      repos: userData.public_repos,
      stars: totalStars,
      lastCommit: new Date().toLocaleDateString(),
    };
  } catch (error: any) {
    console.error(
      "Error fetching GitHub stats:",
      error?.response?.data || error.message
    );
    // Fallback or re-throw
    return {
      commits: 0,
      repos: 0,
      stars: 0,
      lastCommit: "-",
    };
  }
});
