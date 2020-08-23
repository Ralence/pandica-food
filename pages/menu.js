/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { Fragment, useEffect } from "react";

import ImgBanner from "../src/components/ImgBanner";
import Menu from "../src/components/Menu";

import MainBrandArea from "../src/components/MainBrandArea";

import fs from "fs";
import path from "path";

const menu = ({ menu }) => {
  return (
    <Fragment>
      <ImgBanner image={"/chopstick.jpg"} alt="chopsticks and bowl of noodles" />
      <MainBrandArea title="Naš Meni" subTitle="Odaberite nešto iz naše ponude!">
        <p sx={{ fontSize: 3, textAlign: "center", margin: 0 }}>
          Za vas smo pripremili bogat izbor jela i pića.
        </p>
      </MainBrandArea>
      <Menu menu={menu} />
    </Fragment>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "data");
  const filenames = fs.readdirSync(postsDirectory);

  const data = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: JSON.parse(fileContents),
    };
  });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      menu: data[0].content,
    },
  };
}

export default menu;
