import React from "react";
import img1 from "../assets/projects/project1.png";
import img2 from "../assets/projects/project2.png";
import img3 from "../assets/projects/project3.png";
import img4 from "../assets/projects/project4.png";
import img5 from "../assets/projects/project6.png";
import img6 from "../assets/projects/project5.png";
// import { MotionAnimate } from "react-motion-animate";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import OpenInNew from "@mui/icons-material/OpenInNew";

export default function Projects({ setModal, setProjectNo }) {
  const navigateToLinksHandler = (value) => {
    window.location.href = value;
  };
  const ViewProjectHandler = (projectno) => {
    setProjectNo(projectno);
    setModal((value) => !value);
  };

  return (
    <div
      id="projects"
      className="px-[10%] max-[1300px]:px-[5%]  py-20 max-[455px]:py-10 bg-[#04090F] text-white w-[100%]"
    >
      <div className="font-bold text-4xl max-[1300px]:text-3xl max-[992px]:text-2xl">
        Projects
      </div>
      <div className="flex max-[940px]:flex-col mt-10 gap-4">
        <div className="relative max-[940px]:flex max-[940px]:justify-start">
          <img
            alt="Project"
            className="h-72 max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44 rounded-xl"
            src={img1}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden  left-0">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/sauravsaran99?tab=repositories"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 1)}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="relative max-[940px]:flex max-[940px]:justify-end">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img6}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/technixtechnology/bbplus"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 2)}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className=" flex gap-4 max-[940px]:flex-col justify-end mt-10 overflow-auto">
        <div className="relative max-[940px]:flex ">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img3}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/sauravsaran99?tab=repositories"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 3)}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="relative max-[940px]:flex max-[940px]:justify-end ">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img2}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/technixtechnology/CustomerEntityResolutionJourney"
                )}
              >
                <GitHubIcon className="text-white" />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 4)}>
                <OpenInNew className="text-white" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className=" flex gap-4 max-[940px]:flex-col  mt-10 overflow-auto">
        <div className="relative max-[940px]:flex">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img4}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/technixtechnology/axio-sandbox"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 5)}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="relative max-[940px]:flex max-[940px]:justify-end">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img5}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/sauravsaran99/pig-4players"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Project">
              <IconButton onClick={ViewProjectHandler.bind(this, 6)}>
                <OpenInNew />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
