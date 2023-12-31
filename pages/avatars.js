import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Avatars({ avatars }) {
  // console.log("Avatars");
  // console.log(avatars);
  return (
    <div>
      <Header />
      <h1>Avatars</h1>
      <p>All of the Avatars that appeared in the show:</p>
      {/* Apply the gridContainer class to the ul element */}
      <ul className={styles.gridContainer}>
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
