import React, { useEffect, useState } from "react";

const MediaViewer: React.FC = () => {
  const [mediaUrl, setMediaUrl] = useState<string>("");
  const [isVideo, setIsVideo] = useState<boolean>(false);

  useEffect(() => {
    // Get the URL from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const mediaParam = urlParams.get("media");

    if (mediaParam) {
      setMediaUrl(mediaParam);

      const imageExtensions = ["jpg", "jpeg", "png", "gif"];
      const extension = mediaParam.split(".").pop()?.toLowerCase();
      setIsVideo(extension ? !imageExtensions.includes(extension) : false);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isVideo ? (
        <video
          controls
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={mediaUrl}
          alt="Media"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      )}
    </div>
  );
};

export default MediaViewer;
