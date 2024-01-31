import http from "../http-common";

const getAll = () => {
    return http.get("/allProperties?page=1&limit=10");
  }

  const PropertiesService = {
    getAll,
  };
  
  export default PropertiesService;
