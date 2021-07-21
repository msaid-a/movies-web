import React, { ReactNode } from "react";
import "./style.css";
import Logo from "../../static/images/logo.png";
interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = (props) => {
  return (
    <div className="container-custom pt-4">
      {props.children}
      <div className="footer-custom mt-40">
        <div>
          <footer className="footer text-white relative pt-1 w-screen">
            <div className="container mx-auto px-6">
              <div className="flex items-center flex-no-shrink mr-6"></div>
            </div>
            <div className="container mx-auto px-6">
              <div className=" border-t-2 border-gray-300 flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-6">
                  <p className="text-sm font-bold mb-2">
                    © 2021 by Muhammad Said Arrafi
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
