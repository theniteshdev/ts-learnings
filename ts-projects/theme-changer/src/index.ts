const bodyElement = document.querySelector("body") as HTMLBodyElement | null;
const toggleButton = document.querySelector(
  "#theme-toggle",
) as HTMLElement | null;

toggleButton?.addEventListener("click", function (event: MouseEvent) {
  const target = event.target as HTMLElement | null;
  bodyElement?.classList.toggle("dark");
});
