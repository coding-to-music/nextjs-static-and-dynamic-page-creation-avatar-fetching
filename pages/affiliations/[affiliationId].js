import Image from "next/image";
import Header from "../../components/Header";

export default function Affiliation({ characters, affiliationId }) {
  return (
    <div>
      <Header />
      <h1>
        Characters Matching Affiliation &quot;
        {affiliationId.replace(/\+/g, " ")}&quot;
      </h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "4em",
        }}
      >
        {characters.map((character) => {
          return (
            <li key={character._id}>
              <p>{character.name}</p>
              <p>{character.affiliation}</p>
              {/* <p>{character.photoUrl}</p> */}
              {/* <Image
                src={character.photoUrl}
                alt="Avatar"
                width={300}
                height={300}
              /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const affiliationId = params.affiliationId.replace(/\-/g, "+");
  const characters = await fetch(
    `https://last-airbender-api.fly.dev/api/v1/characters?affiliation=${affiliationId}`
  ).then((res) => res.json());
  return {
    props: {
      affiliationId,
      characters,
    },
  };
}
