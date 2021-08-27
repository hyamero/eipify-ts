import React from "react";

interface ContentProps {
  dataIP: any;
  loading: undefined | boolean;
}

export const Content: React.FC<ContentProps> = ({ dataIP, loading }) => {
  return (
    <section>
      {loading === false ? (
        <>
          <p>{dataIP.continent}</p>
        </>
      ) : null}
    </section>
  );
};
