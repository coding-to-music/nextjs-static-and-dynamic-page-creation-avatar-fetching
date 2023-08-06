import Image from "next/image";

export default function Avatars({ avatars }) {
  return (
    <div>
      <h1>Avatars</h1>
      <p>All of the Avatars that appeared in the show:</p>
      <ul
        style={{
          display: "grid",
          "grid-template-columns": "1fr 1fr 1fr",
          "grid-gap": "4em",
        }}
      >
        {avatars.map((avatar) => {
          return (
            <li key={avatar._id}>
              <p>{avatar.name}</p>
              <Image
                src={avatar.photoUrl}
                alt="Avatar"
                width={300}
                height={300}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const avatars = await fetch(
    "https://last-airbender-api.fly.dev/api/v1/characters/avatar"
  ).then((res) => res.json());
  return {
    props: {
      avatars,
    },
  };
}
