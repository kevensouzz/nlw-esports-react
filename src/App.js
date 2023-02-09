import "./style/style.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameListData = [
  {
    href: "https://www.twitch.tv/directory/game/CSGO",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-144x192.jpg",
    alt: "Imagem do Counter-Strike Global Offensive",
  },
];

const channelListDate = [
  {
    href: "https://www.twitch.tv/smzinho",
    src: "https://pbs.twimg.com/profile_images/1540557779223674881/qxoAiixM_400x400.jpg",
    alt: "Canal do Smzinho",
  },
  {
    href: "https://www.twitch.tv/yayahuz",
    src: "https://static1.personality-database.com/profile_images/37e5b9f1e3204fb2beac5f60d0d00d5d.png",
    alt: "Canal do Yayah",
  },
  {
    href: "https://www.twitch.tv/casimito",
    src: "https://www.meioemensagem.com.br/wp-content/uploads/2022/11/casimiro-cred-reproducao-150x150.jpg",
    alt: "Canal do Casimiro",
  },
  {
    href: "https://www.twitch.tv/BakaGaijinLive",
    src: "https://pbs.twimg.com/media/FYj_cO0X0AImmhM.jpg",
    alt: "Canal do Baka Gaijin",
  },
  {
    href: "https://www.twitch.tv/tioorochitwitch",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SAv_dMeK6ZrkllRNiPiMKpfWcI9ETiczAp3YOythwKMJbQqRh_Ii6GblLjHzMK5bBPU&usqp=CAU",
    alt: "Canal do Tio Oroche",
  },
  {
    href: "https://www.twitch.tv/Douglassola",
    src: "https://pbs.twimg.com/profile_images/1165024283216744448/rjaXwj1K_400x400.png",
    alt: "Canal do Dougla Sola",
  },
];

const SocialListDate = [
  {
    href: "https://www.linkedin.com/in/kevenssouza1/",
    src: "/assets/linkedin.svg",
    alt: "Keven's Linkedin"
  },
  {
    href: "https://github.com/kevensouzz",
    src: "/assets/github.svg",
    alt: "Keven's Github"
  }
]

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {gameListData.map(function (item) {
            return (
              <ListItem
                href={item.href}
                src={item.src}
                alt={item.alt}
                key={item.href}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e trasmissões que não perco"
          className="channel-list"
        >
          {channelListDate.map(function (item) {
            return (
              <ListItem
                href={item.href}
                src={item.src}
                alt={item.alt}
                key={item.href}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Conencte-se comigo agora mesmo"
          className="Social-list"
        >
          {SocialListDate.map(function (item) {
            return (
              <ListItem
                href={item.href}
                src={item.src}
                alt={item.alt}
                key={item.href}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
};

export default App;
