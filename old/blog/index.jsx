import React from "react";
import { navigate } from "gatsby";
import LoadingScreen from "../../components/LoadingScreen";

function Blog() {
  React.useEffect(() => {
    navigate("/#blog");
  }, []);
  return <LoadingScreen/>;
}

export default Blog;