'use client';
import { useEffect } from 'react';
import UserForm from './userForm';

export const RyseupAIAgentWidget = ({ userData } : {userData: any}) => {
  useEffect(() => {
    window.VG_CONFIG = {
      ID: "0ga2nnz2b842tbzy",
      region: 'na',
      render: 'full-width',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_dev_build/styles.css",
      ],
      user: userData,
    };

    const VG_SCRIPT = document.createElement("script");
    VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_dev_build/vg_bundle.js";
    VG_SCRIPT.defer = true;
    document.body.appendChild(VG_SCRIPT);

    return () => {
      document.body.removeChild(VG_SCRIPT);
    };
  }, [userData]);
  return (
    <div style={{ display: 'none' }} id="VG_OVERLAY_CONTAINER">
      {/* This is where Voiceglow will render the widget */}
    </div>
  );
};
