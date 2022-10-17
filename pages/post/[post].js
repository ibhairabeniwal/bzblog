export const getStaticPaths = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/IWI8");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        post: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.post;
  const res = await fetch(`https://www.jsonkeeper.com/b/IWI8/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const post = ({ data }) => {
  const { title, id, category, content, author, avatar } = data;
  return (
    <>
      <div key={id}>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default post;
