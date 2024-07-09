import Contact from "@/components/Contact";

export default async function Footer() {
  let message = "";
  try {
    const res1 = await fetch(
      "https://api.github.com/repos/edmondwong6279/ew.monorepo/git/refs/heads/main",
    );
    const blobbed1 = await res1.blob();
    const parsed1 = await blobbed1.text();
    const res1json = await JSON.parse(parsed1);

    const res2 = await fetch(res1json.object.url);
    const blobbed2 = await res2.blob();
    const parsed2 = await blobbed2.text();
    const res2json = await JSON.parse(parsed2);

    const lastTimeStamp = new Date(res2json.author.date);

    message = `Last updated (monorepo): ${lastTimeStamp.toUTCString()} - ${res2json.message}`;
  } catch (e) {
    console.error(
      `Error fetching latest commit messages (Repo may not be public): ${e}`,
    );
  }

  return (
    <>
      <footer className={"flex justify-center w-full bg-[#0a0a0a] px-6 py-10"}>
        <ol className="max-w-screen-xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <li>
            <p>Ed Wong&apos;s Website 2024</p>
            <p>{message}</p>
          </li>
          <li>
            <Contact />
          </li>
        </ol>
      </footer>
    </>
  );
}
