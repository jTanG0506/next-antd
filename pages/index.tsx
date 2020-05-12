import Head from "next/head";
import { Card, Layout, List, PageHeader, Typography } from "antd";

const { Content, Footer, Header } = Layout;
const { Text, Title } = Typography;

export default function Home() {
  const cardData = [
    {
      title: "Ant Design",
      description:
        "Find out more about the Ant Design UI Design Language and React UI library.",
      url: "https://ant.design",
    },
    {
      title: "TypeScript",
      description: `Ship safely with TypeScript - "JavaScript that scales"`,
      url: "https://www.typescriptlang.org",
    },
    {
      title: "Documentation",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://nextjs.org/docs",
    },
    {
      title: "Learn",
      description: "Learn about Next.js in an interactive course with quizzes!",
      url: "https://nextjs.org/learn",
    },
    {
      title: "Examples",
      description: "Discover and deploy boilerplate example Next.js projects.",
      url: "https://github.com/zeit/next.js/tree/master/examples",
    },
    {
      title: "Deploy ",
      description:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
      url:
        "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    },
  ];

  return (
    <Layout className="layout">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content style={{ padding: "50px 100px" }}>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <List
          grid={{ gutter: 16, sm: 1, lg: 2 }}
          dataSource={cardData}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title} extra={<a href={item.url}>Read More</a>}>
                <Text ellipsis style={{ display: "block" }}>
                  {item.description}
                </Text>
              </Card>
            </List.Item>
          )}
        />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Powered by{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>{" "}
        | Starter Template by{" "}
        <a
          href="https://github.com/jTanG0506/next-antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          @jTanG0506
        </a>
      </Footer>
    </Layout>
  );
}
