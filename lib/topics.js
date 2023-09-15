import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const topicsDirectory = path.join(process.cwd(), "topics");

export function getSortedTopicsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(topicsDirectory);
  const allTopicsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // const fullPath = path.join(topicsDirectory, fileName);
    // const fileContents = fs.readFileSync(fullPath, "utf8");

    // Combine the data with the id
    return {
      id,
      //   ...fileContents,
    };
  });

  return allTopicsData;
}

export function getAllTopicIds() {
  const fileNames = fs.readdirSync(topicsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getTopicData(id) {
  const fullPath = path.join(topicsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  console.log(contentHtml);

  return {
    id,
    contentHtml,
  };
}
