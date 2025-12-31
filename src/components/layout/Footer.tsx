export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} <DaniDev></DaniDev> Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
