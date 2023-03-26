import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import HomeTemplate from "./template/homeTemplate/HomeTemplate";


function App() {
  return (
    <Routes>
      {publicRoutes.map((route,index)=>{
        let Pages = route.component;
        let Layout = HomeTemplate;
        if(route.layout){
          Layout = route.layout
        }else if(route.layout === null){
         Layout = Fragment
        }
        return <Route key={index} path={route.path} element={<Layout><Pages/></Layout>} />
      })}
    </Routes>
  );
}

export default App;
