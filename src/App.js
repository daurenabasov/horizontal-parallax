import {
  Header,
  BackgroundImg,
  Title,
  Nav,
  Paragraph,
  Img,
  Section,
} from "./style";
import firstImg from "./assets/first.jpg";
import secondImg from "./assets/second.jpg";
import thirdImg from "./assets/third.jpg";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const imgs = [
  "./assets/first.jpg",
  "./assets/second.jpg",
  "./assets/third.jpg",
];

function App() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <>
      <Header>
        <BackgroundImg src={thirdImg} alt="adv" />
        <Nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </Nav>
        <Paragraph
          as={motion.p}
          initial={{ y: "200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          sapiente amet in eveniet mollitia debitis blanditiis, dolorum atque
          accusantium soluta iste? Error perspiciatis possimus eveniet ducimus
          tempore nemo illum, porro doloremque quia? Dolore accusamus veritatis,
          provident quam nesciunt nisi a!
        </Paragraph>
        <Title
          style={{ x: x }}
          as={motion.h1}
          initial={{ y: "200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We sell furniture
        </Title>
      </Header>

      <Section>
        <Img
          src={secondImg}
          alt=""
          as={motion.img}
          initial={{ x: "-200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />

        <Paragraph
          as={motion.p}
          initial={{ x: "200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          tempore est sapiente, excepturi nesciunt voluptatem fugit ut!
          Asperiores porro nobis consectetur velit autem reprehenderit quisquam
          culpa, saepe ad eveniet odit?
        </Paragraph>
      </Section>
      <Section>
        <Paragraph
          as={motion.p}
          initial={{ x: "-200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque
          maiores nulla, fugit ratione hic esse recusandae sequi magnam quae
          quod blanditiis sit eum cupiditate minus. Commodi maiores voluptatem
          provident in aliquam beatae voluptates consequuntur alias, dignissimos
          at, mollitia aperiam.
        </Paragraph>
        <Img
          src={firstImg}
          alt=""
          as={motion.img}
          initial={{ x: "200px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />
      </Section>
    </>
  );
}

export default App;
