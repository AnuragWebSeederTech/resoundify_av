export const productsData = [
  {
    id: "brand_audio_dsp",
    name: "Audio DSP Solutions",
    category: "audio_dsp",
    description: "Advanced Digital Signal Processing units for superior audio control.",
    image: "https://placehold.co/400x300/F0F4F8/3B82F6?text=Audio+DSP+Brand",
    type: "brand",
    series: [
      {
        id: "series_aurispro",
        name: "Aurispro series",
        description: "Cutting-edge Dante audio interfaces for professional sound.",
        image: "/images/Products/audio_dsp/aurispro44d.webp",
        features: ["Dante Enabled", "High Channel Count", "Compact Design"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_ap_44d", 
            name: "Auris Pro-44D", 
            description: "4 in, 4 out DSP, 1/2 rack, 4x4 Dante", 
            images: [
              "/images/Products/audio_dsp/aurispro44d.webp",
            ] 
          },
          { 
            id: "model_ap_88d", 
            name: "Auris Pro-88D", 
            description: "8 in, 8 out DSP, 8x8 Dante", 
            images: [
              "/images/Products/audio_dsp/aurispro88d.webp",
            ] 
          },
          { 
            id: "model_ap_1212d", 
            name: "Auris Pro-1212D", 
            description: "12 in, 12 out DSP, 8x8 Dante", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Auris+Pro-1212D+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Auris+Pro-1212D+2"
            ] 
          },
          { 
            id: "model_ap_1616d", 
            name: "Auris Pro-1616D", 
            description: "16 in, 16 out DSP, 16x16 Dante", 
            images: [
              "/images/Products/audio_dsp/aurispro1616.webp"
            ] 
          },
          { 
            id: "model_ap_6464d", 
            name: "Auris Pro-6464D", 
            description: "0 in, 0 out DSP, 64x64 Dante", 
            images: [
              "/images/Products/audio_dsp/aurispro6464.webp"
            ] 
          },
        ],
      },
      {
        id: "series_echoprime",
        name: "Echoprime series",
        description: "Versatile DSPs with Acoustic Echo Cancellation (AEC) for clear audio conferencing.",
        image: "/images/Products/audio_dsp/EchoPrime-88AEC.webp",
        features: ["AEC Support", "Multiple I/O Options", "Robust Performance"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_ep_88aec", 
            name: "EchoPrime-88AEC", 
            description: "8 in, 8 out DSP with 4 AEC", 
            images: [
              "/images/Products/audio_dsp/EchoPrime-88AEC.webp"
            ] 
          },
          { 
            id: "model_ep_b88", 
            name: "EchoPrime-B88", 
            description: "8 in, 8 out DSP", 
            images: [
              "/images/Products/audio_dsp/EchoPrime-B88.webp"
            ] 
          },
          { 
            id: "model_ep_b1616", 
            name: "EchoPrime-B1616", 
            description: "16 in, 16 out DSP", 
            images: [
              "/images/Products/audio_dsp/EchoPrime-B1616.webp"
            ] 
          },
        ],
      },
      {
        id: "series_vox_nova",
        name: "VOX NOVA series",
        description: "Open structure DSPs with extensive Dante and AEC capabilities for flexible audio solutions.",
        image: "/images/Products/audio_dsp/VoxNova88.webp",
        features: ["Open Architecture", "Dante Integration", "Advanced AEC"],
        status: "New Arrival",
        type: "series",
        models: [
          { 
            id: "model_vn_88", 
            name: "VoxNova88", 
            description: "Open Structure DSP 8X8, Dante 64X64, 8AEC", 
            images: [
              "/images/Products/audio_dsp/VoxNova88.webp"
            ] 
          },
          { 
            id: "model_vn_1616", 
            name: "VoxNova1616", 
            description: "Open Structure DSP 16X16, Dante 64X64, 8AEC", 
            images: [
              "/images/Products/audio_dsp/VoxNova1616.webp"
            ] 
          },
          { 
            id: "model_vn_128f", 
            name: "VoxNova128F", 
            description: "Open Structure DSP 12X8, Dante 64X64, 8 flex channels, 12AEC", 
            images: [
              "/images/Products/audio_dsp/VoxNova128F.webp"
            ] 
          },
        ],
      },
      {
        id: "series_control_panel_accessories",
        name: "Control panel and accessories",
        description: "Intuitive control solutions and accessories for seamless audio system management.",
        image: "/images/Products/audio_dsp/omnipanel8.png",
        features: ["Touchscreen Interfaces", "Dante Microphones", "Integrated Control"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_omni_panel8", 
            name: "OmniPanel8", 
            description: "8 inch control panel", 
            images: [
              "/images/Products/audio_dsp/omnipanel8.png"
            ] 
          },
          { 
            id: "model_omni_panel4", 
            name: "OmniPanel4", 
            description: "4inch control panel", 
            images: [
              "/images/Products/audio_dsp/omnipanel4.png"
            ] 
          },
          { 
            id: "model_omni_panel3", 
            name: "OmniPanel3", 
            description: "VC and SS with lcd screen and rotary knob for Aurispro Series", 
            images: [
              "/images/Products/audio_dsp/omnipanel3.png"
            ] 
          },
          { 
            id: "model_gmic_cp", 
            name: "GMIC-CP", 
            description: "Dante microphone with control panel", 
            images: [
              "/images/Products/audio_dsp/GMIC-CP.webp"
            ] 
          },
          { 
            id: "model_gmic_3", 
            name: "GMIC-3", 
            description: "Dante Microphone", 
            images: [
              "/images/Products/audio_dsp/GMIC-3.webp"
            ] 
          },
        ],
      },
      {
        id: "series_multiplayer",
        name: "Multiplayer",
        description: "Multi-channel audio web streamers with scheduling and Dante virtual sound card support.",
        image: "/images/Products/audio_dsp/R-MP8.jpg",
        features: ["Web Streaming", "Dante Virtual Sound Card", "Scheduling & Playback"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_r_mp8", 
            name: "R-MP8", 
            description: "8 Channel audio web streamer and schedule, playback, insertion, support Dante virtual sound card", 
            images: [
              "/images/Products/audio_dsp/R-MP8.jpg"
            ] 
          },
          { 
            id: "model_r_mp16", 
            name: "R-MP16", 
            description: "16 Channel Audio web streamer and schedule, playback, insertion, support Dante virtual sound card", 
            images: [
              "/images/Products/audio_dsp/R-MP16.jpg"
            ] 
          },
        ],
      },
    ],
  },
  {
    id: "brand_av_over_ip_solutions",
    name: "AV over IP Solutions",
    category: "av_over_ip_solutions",
    description: "Seamless audio-visual distribution over IP networks for various applications.",
    image: "https://placehold.co/400x300/F0F4F8/EF4444?text=AV+over+IP+Brand",
    type: "brand",
    series: [
      {
        id: "series_streamlite",
        name: "Streamlite series",
        description: "Efficient H.264 AV over IP solutions with multi-screen capability.",
        image: "/images/Products/av_over_ip_soln/IPM2000.B.png",
        features: ["H.264 Encoding", "Multi-screen Capability", "4K@30Hz"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_sl_4k30", 
            name: "StreamLite-4k30", 
            description: "H.264 with up to 4 screen capability PTN Electronic, 4K@30", 
            images: [
              "/images/Products/av_over_ip_soln/IPM2000.B.png",
              "/images/Products/av_over_ip_soln/IPM2000.png",
            ] 
          },
        ],
      },
      {
        id: "series_streamcore",
        name: "Streamcore series",
        description: "High-quality 4K60 4:4:4/HDR AV over IP with JPEG2K compression and advanced features.",
        image: "/images/Products/av_over_ip_soln/EN.png",
        features: ["4K60 HDR", "JPEG2K Compression", "USB & Audio Support", "Dante Management"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_sc_en", 
            name: "StreamCore-EN", 
            description: "4K60 4:4:4/HDR AV over IP JPEG2K Encoder - Basic Version", 
            images: [
              "/images/Products/av_over_ip_soln/EN.png",
            ] 
          },
          { 
            id: "model_sc_dn", 
            name: "StreamCore-DN", 
            description: "4K60 4:4:4/HDR AV over IP JPEG2K Decoder - Basic Version", 
            images: [
              "/images/Products/av_over_ip_soln/DN.png",
            ] 
          },
          { 
            id: "model_sc_enkvm", 
            name: "StreamCore-ENKVM", 
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K Encoder", 
            images: [
              "/images/Products/av_over_ip_soln/ENKVM.png",
            ] 
          },
          { 
            id: "model_sc_dnkvm", 
            name: "StreamCore-DNKVM", 
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K Decoder", 
            images: [
              "/images/Products/av_over_ip_soln/DNKVM.png",
            ] 
          },
          { 
            id: "model_sc_wp", 
            name: "StreamCore-WP", 
            description: "4K60 4:4:4/HDR w/USB and Audio over IP JPEG2K HDMI/USB-C Wallplate Encoder", 
            images: [
              "/images/Products/av_over_ip_soln/WP.png"
            ] 
          },
          { 
            id: "model_sc_cb", 
            name: "StreamCore-CB", 
            description: "Control box for with Dante management", 
            images: [
              "/images/Products/av_over_ip_soln/CB.png"
            ] 
          },
          { 
            id: "model_sc_cbd", 
            name: "StreamCore-CBD", 
            description: "Control box for JPEG2K Gen 1/2 IP", 
            images: [
              "/images/Products/av_over_ip_soln/CBD.png"
            ] 
          },
        ],
      },
      {
        id: "series_streampro",
        name: "Streampro Series",
        description: "SDVoE solutions for advanced 4K60 A/V over IP with KVM and video wall capabilities.",
        image: "/images/Products/av_over_ip_soln/StreamPro_HDN-CTL100D.png",
        features: ["SDVoE Technology", "4K60 4:4:4 HDR", "USB KVM", "Video Wall/Multiview"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_sp_copper_fiber_1", 
            name: "StreamPro", 
            description: "4K60 4:4:4/HDR w/USB2.0/Video Preview over IP SDVoE Tranceiver Copper&Fiber", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-CTL100D.png",
            ] 
          },
          { 
            id: "model_sp_fiber_kvm_2", 
            name: "StreamPro", 
            description: "4K60 4:4:4/HDR w/USB KVM over IP SDVoE Tranceiver Fiber", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AS-DEC.webp",
            ] 
          },
          { 
            id: "model_sp_avp2000_fiber_3", 
            name: "StreamPro", 
            description: "SDVoE AVP2000 IP solution Seamless Matrix/Video Wall/Multiview -- Fiber Port", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ASL-DEC.webp",
            ] 
          },
          { 
            id: "model_sp_avp2000_fiber_4", 
            name: "StreamPro", 
            description: "SDVoE AVP2000 IP solution Seamless Matrix/Video Wall/Multiview -- Fiber Port", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AS-ENC.webp",
            ] 
          },
          { 
            id: "model_sp_avp1000_fiber_5", 
            name: "StreamPro", 
            description: "SDVoE AVP1000 IP solution Seamless Matrix -- Fiber Port", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ASL-ENC.webp",
            ] 
          },
          { 
            id: "model_sp_avp1000_fiber_6", 
            name: "StreamPro", 
            description: "SDVoE AVP1000 IP solution Seamless Matrix -- Fiber Port", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100AT.webp",
            ] 
          },
          { 
            id: "model_sp_control_box_7", 
            name: "StreamPro", 
            description: "Control box for SDVoE IP", 
            images: [
              "/images/Products/av_over_ip_soln/StreamPro_HDN-EB100ATFS.webp",
            ] 
          },
        ],
      },
    ],
  },
  {
    id: "brand_video_conferencing",
    name: "Video Conferencing & Broadcasting",
    category: "video_conferencing_and_broadcasting_system",
    description: "Integrated systems for professional communication and content delivery.",
    image: "https://placehold.co/400x300/F0F4F8/22C55E?text=Video+Conferencing",
    type: "brand",
    series: [
      {
        id: "series_dante_ptz_camera",
        name: "Dante PTZ Camera",
        description: "4K Ultra HD PTZ cameras with Dante audio and AI tracking for superior video conferencing.",
        image: "/images/Products/video_conferencing/PTZ30.webp",
        features: ["4K UHD", "AI Tracking", "Dante Audio", "PoE+"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_vc_ptz30_dante", 
            name: "VC-PTZ30 (DANTE)", 
            description: "4K Ultra HD Video Conference Camera AI tracking 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 30X 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+", 
            images: [ 
              "/images/Products/video_conferencing/PTZ30.webp",
            ] 
          },
          { 
            id: "model_vc_ptz16_dante", 
            name: "VC-PTZ16 (DANTE)", 
            description: "4K Ultra HD Video Conference Camera AI tracking 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 20X + 16X digital zoom 4K@60/59.94/50/30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+", 
            images: [
              "/images/Products/video_conferencing/PTZ16.webp",
            ] 
          },
          { 
            id: "model_vc_ptz20_dante", 
            name: "VC-PTZ20 (DANTE)", 
            description: "4K Ultra HD Video Conference Camera 1/1.8'', CMOS, Max Effective Pixel: 8.42M, 20X 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+ AI tracking", 
            images: [
              "/images/Products/video_conferencing/PTZ20.webp",
            ] 
          },
          { 
            id: "model_vc_ptz12_dante", 
            name: "VC-PTZ12 (DANTE)", 
            description: "4K Ultra HD Video Conference Camera AI tracking FOV 80.8 degree 1/2.5'', CMOS, Max Effective Pixel: 8.40M, 12X optical zoom,16X digital zoom 4K@60/59.94/50//30/29.97/25fps, 1080P@60/59.94/50/30/29.97fps, 1080I@60/59.94/50fps, 720P@60/59.94fps HDMI, 3G-SDI, RJ45, USB2.0, 1-ch Line in, RS232 in, RS232 out, RS485, POE+", 
            images: [
              "/images/Products/video_conferencing/PTZ12.webp",
            ] 
          },
        ],
      },
      {
        id: "series_auto_switching_tracking_camera",
        name: "Auto switching auto Tracking camera",
        description: "Integrated 4K HD tracking cameras for teaching and presentation environments.",
        image: "/images/Products/video_conferencing/PTZ12.webp",
        features: ["4K Resolution", "AI Tracking", "Dual Lens Systems", "PoE"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_vc_auto2", 
            name: "VC-AUTO2", 
            description: "4K Integrated HD teaching tracking camera Close-up Camera:12x optical, 16x digital 4K@30fps, 4K@25fps, 4K@29.97fps1080P@30fps,1080P@25fps Panorama Camera: 4K@30fps, 4K@25fps, 4K@29.97fps1080P@30fps,1080P@25fps RS232 in, RS232 out, RS485, 3G-SDI, RJ45, HDMI, USB3.0, USB2.0, Line In, POE", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=VC-AUTO2+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=VC-AUTO2+2"
            ] 
          },
          { 
            id: "model_vc_auto4", 
            name: "VC-AUTO4", 
            description: "4K Integrated HD teaching tracking camera Student Close -up Lens: f=7.37mm, Horizontal FOV: 43° Teacher Close -up Lens: f=12.49mm, Horizontal FOV: 26° Student Panoramic lens: f=2.2mm, Horizontal FOV: 110° Teacher Panoramic lens: f=7.37mm, Horizontal FOV: 43° 4K@30fps/25fps RJ45, USB3.0, Line In, Line out, POE", 
            images: [
              "/images/Products/video_conferencing/PTZ12.webp"
            ] 
          },
        ],
      },
      {
        id: "series_all_in_one_bar_solution",
        name: "All in one BAR solution",
        description: "Integrated 4K UHD USB cameras with built-in mics and speakers for seamless collaboration.",
        image: "/images/Products/video_conferencing/ST-200.png",
        features: ["4K UHD Camera", "Built-in Mic & Speaker", "AI Tracking", "Bluetooth & WiFi"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_st_200", 
            name: "ST-200", 
            description: "4K UHD ALL-IN-ONE USB Camera 1/1.8'', CMOS, 20M, 4K@30fps Built-in microphone and speaker, 114° (DFOV) ,105° (HFOV) , 5x zoom, MPT + EPTZ, speaker tracking, smart gallery, USB3.0(Type C), HDMI, RJ45, Bluetooth 5.0, WIFI6, BYOM", 
            images: [
              "/images/Products/video_conferencing/ST-200.png",
            ] 
          },
          { 
            id: "model_rc_700", 
            name: "RC-700", 
            description: "Digital Array Microphone, Built-in 7 microphone arrays, with 360° pickup range, 8-meter distance voice pickup, USB2.0 and 3.5 mm audio interface, USB DC5V", 
            images: [
              "/images/Products/video_conferencing/RC-700.png",
            ] 
          },
          { 
            id: "model_rc_702", 
            name: "RC-702", 
            description: "POE Cascading Omnidirectional Digital Array Microphone Built-in 6 mics to form a circular array microphone", 
            images: [
              "/images/Products/video_conferencing/RC-702.png",
            ] 
          },
        ],
      },
      {
        id: "series_video_codec_control_panel",
        name: "Video codec and control panel",
        description: "Smart video conferencing endpoints and intuitive control panels for enhanced meeting experiences.",
        image: "/images/Products/video_conferencing/RC-VCE.png",
        features: ["4K Endpoint", "Android OS", "Touch Control"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_rc_vce", 
            name: "RC-VCE", 
            description: "4K Smart Detachable Video Conferencing Endpoint Android 12", 
            images: [
              "/images/Products/video_conferencing/RC-VCE.png",
            ] 
          },
          { 
            id: "model_rc_10cp", 
            name: "RC-10CP", 
            description: "Zoom meeting controlling Panel * 10.1-inch IPS touch screen, Android 9.0 system", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-10CP+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-10CP+2"
            ] 
          },
        ],
      },
      {
        id: "series_av_processor",
        name: "AV Processor",
        description: "Video Conference AV bridges for seamless integration of audio-visual systems.",
        image: "/images/Products/video_conferencing/AV_PROCESSOR.png",
        features: ["Video Bridging", "Conference Integration"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_rc_avb", 
            name: "RC-AVB", 
            description: "Video Conference AV Bridge", 
            images: [
              "/images/Products/video_conferencing/AV_PROCESSOR.png",
            ] 
          },
        ],
      },
      {
        id: "series_large_meeting_room_setup",
        name: "Large meeting room setup",
        description: "Comprehensive solutions for large meeting room audio and video tracking, enhancing collaboration.",
        image: "https://placehold.co/400x300/F0F4F8/22C55E?text=Meeting+Room",
        features: ["AI Speech", "Video Tracking", "Dante Microphones"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_rai_150", 
            name: "RAI-150", 
            description: "Multi position camera in the venue AI Speech", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-150+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-150+2"
            ] 
          },
          { 
            id: "model_rai_tb", 
            name: "RAI-TB", 
            description: "Intelligent audio video tracking box", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-TB+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-TB+2"
            ] 
          },
          { 
            id: "model_rai_128c", 
            name: "RAI-128C", 
            description: "Dante ceiling mount array microphone", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-128C+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RAI-128C+2"
            ] 
          },
        ],
      },
      {
        id: "series_av_recorder",
        name: "AV Recoder",
        description: "Professional conferencing recorders with ample storage for capturing important meetings.",
        image: "https://placehold.co/400x300/F0F4F8/22C55E?text=AV+Recorder",
        features: ["1TB Storage", "Professional Recording"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_rc_rec", 
            name: "RC-REC", 
            description: "Professional conferencing recorder with 1 TB", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-REC+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=RC-REC+2"
            ] 
          },
        ],
      },
    ],
  },
  {
    id: "brand_dante_wall_plates",
    name: "Dante Wall Plates",
    category: "dante_wall_plates",
    description: "Convenient Dante audio network access points with various input/output options.",
    image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Dante+Wall+Plates",
    type: "brand",
    series: [
      {
        id: "series_dante_wall_plate",
        name: "Dante wall plate",
        description: "Versatile Dante wall plates featuring XLR, RCA, 3.5mm, and Bluetooth connectivity.",
        image: "/images/Products/dante_wall_plates/XLRIO.webp",
        features: ["XLR I/O", "Bluetooth", "RCA/TRS", "PoE"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_dw_12_xlrio", 
            name: "DW 12-XLRiO", 
            description: "Dante wall plate with 2 XLR in and 2 XLR Out", 
            images: [
              "/images/Products/dante_wall_plates/XLRIO.webp",
            ] 
          },
          { 
            id: "model_dw_33_lrbtio", 
            name: "DW 33-LRBTiO", 
            description: "Dante wall plate with Bluetooth, RCA, and 3.5mm inputs", 
            images: [
              "/images/Products/dante_wall_plates/LRBTIO.webp",
            ] 
          },
          { 
            id: "model_dw_44_lrbtio", 
            name: "DW 44-LRBTiO", 
            description: "Dante wall plate with RCA bluetooth and TRS", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+44-LRBTiO+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+44-LRBTiO+2"
            ] 
          },
          { 
            id: "model_dw_20_lrbt_io", 
            name: "DW 20 - LRBT iO", 
            description: "Dante wall plate with Bluetooth or stereo signals and Dante/AES67 network digital signals", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+20+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=DW+20+2"
            ] 
          },
          { 
            id: "model_dw_25_lrbt_io", 
            name: "DW 25 - LRBT iO", 
            description: "Dante wall plate with 4-channel XLR Audio Input Panel , 48V phantom power supply.", 
            images: [
              "/images/Products/dante_wall_plates/DW25-LRBT.png",
            ] 
          },
          { 
            id: "model_dw_26_lrbt_io", 
            name: "DW 26 - LRBT iO", 
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (white)", 
            images: [
              "/images/Products/dante_wall_plates/DW26-LRBT.png",
            ] 
          },
          { 
            id: "model_dw_27_lrbt_io", 
            name: "DW 27 - LRBT iO", 
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (black)", 
            images: [
              "/images/Products/dante_wall_plates/DW27-LRBT.png",
            ] 
          },
          { 
            id: "model_dw_28_lrbt_io", 
            name: "DW 28 - LRBT iO", 
            description: "Dante Audio Input Panel Bluetooth 5.0, RCA stereo left and right channel interface (rose gold)", 
            images: [
              "/images/Products/dante_wall_plates/DW28-LRBT.png",
            ] 
          },
        ],
      },
      {
        id: "series_customizable_floor_box",
        name: "Customizable Floor box",
        description: "Tailored floor boxes for flexible and discreet cable management and connectivity.",
        image: "/images/Products/dante_wall_plates/floor_box.png",
        features: ["Customizable Ports", "Durable Design"],
        status: "Available to Order",
        type: "series",
        models: [
          { 
            id: "model_custom_floor_box", 
            name: "Custom", 
            description: "Customizable Floor box", 
            images: [
              "/images/Products/dante_wall_plates/floor_box.png",
            ] 
          },
        ],
      },
      {
        id: "series_customizable_wall_plate",
        name: "Customizable wall plate",
        description: "Design your own wall plates for unique installation needs and aesthetic preferences.",
        image: "/images/Products/dante_wall_plates/wall_plate.png",
        features: ["Configurable Layout", "Various Finishes"],
        status: "Available to Order",
        type: "series",
        models: [
          { 
            id: "model_custom_wall_plate", 
            name: "Custom", 
            description: "Customizable wall plate", 
            images: [
              "/images/Products/dante_wall_plates/wall_plate.png",
            ] 
          },
        ],
      },
    ],
  },
  {
    id: "brand_microphones",
    name: "Professional Microphones",
    category: "microphones",
    description: "High-quality microphones for every application, from live sound to studio recording.",
    image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Microphones",
    type: "brand",
    series: [
      {
        id: "series_2_channel_wireless_mic",
        name: "2 Channel wireless mic",
        description: "Dual wireless microphone systems offering versatility with handheld, bodypack, and desktop options.",
        image: "/images/Products/Microphone/AM-RX2H.webp",
        features: ["Dual Channel", "UHF Frequency", "Handheld/Bodypack/Desktop Options"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_am_rx2h", 
            name: "AM-RX2H", 
            description: "RUHF-2H Dual Wireless Handheld Microphone System", 
            images: [
              "/images/Products/Microphone/AM-RX2H.webp",
            ] 
          },
          { 
            id: "model_am_rx2b", 
            name: "AM-RX2B", 
            description: "RUHF-2B Dual Wireless Bodypack Microphone System", 
            images: [
              "/images/Products/Microphone/RX2B.webp",
            ] 
          },
          { 
            id: "model_am_rx2d", 
            name: "AM-RX2D", 
            description: "RUHF-2D Dual Wireless Desktop Microphone System", 
            images: [
              "/images/Products/Microphone/AM-RX2D.webp",
            ] 
          },
        ],
      },
      {
        id: "series_4_channel_wireless_mic",
        name: "4 Channel wireless mic",
        description: "Quad wireless microphone systems providing extensive coverage for larger setups.",
        image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=4Ch+Wireless",
        features: ["Quad Channel", "UHF Frequency", "Multiple Mic Types"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_am_rx4h", 
            name: "AM-RX4H", 
            description: "RUHF-4H Quad Wireless Handheld Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4H+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4H+2"
            ] 
          },
          { 
            id: "model_am_rx4b", 
            name: "AM-RX4B", 
            description: "RUHF-4B Quad Wireless Bodypack Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4B+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4B+2"
            ] 
          },
          { 
            id: "model_am_rx4d", 
            name: "AM-RX4D", 
            description: "RUHF-4D Quad Wireless Desktop Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4D+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX4D+2"
            ] 
          },
        ],
      },
      {
        id: "series_8_channel_wireless_mic",
        name: "8 Channel wireless mic",
        description: "Eight-channel wireless microphone systems ideal for large-scale events and installations.",
        image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=8Ch+Wireless",
        features: ["Eight Channel", "UHF Frequency", "Scalable Systems"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_am_rx8h", 
            name: "AM-RX8H", 
            description: "RUHF-8H Eight Wireless Handheld Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8H+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8H+2"
            ] 
          },
          { 
            id: "model_am_rx8b", 
            name: "AM-RX8B", 
            description: "RUHF-8B Eight Wireless Bodypack Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8B+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8B+2"
            ] 
          },
          { 
            id: "model_am_rx8d", 
            name: "AM-RX8D", 
            description: "RUHF-8D Eight Wireless Desktop Microphone System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8D+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-RX8D+2"
            ] 
          },
        ],
      },
      {
        id: "series_antenna_system",
        name: "Antenna System",
        description: "Enhance your wireless microphone range and reliability with dedicated antenna systems.",
        image: "https://placehold.co/400x300/F0F4F8/8B5CF6?text=Antenna+System",
        features: ["Signal Enhancement", "Wide Frequency Range"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_am_ac800", 
            name: "AM-AC800", 
            description: "Antenna System", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-AC800+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=AM-AC800+2"
            ] 
          },
        ],
      },
    ],
  },
  {
    id: "brand_all_in_one",
    name: "All-in-One Processors",
    category: "all_in_one_processor",
    description: "Integrated audio and video processing solutions for centralized control.",
    image: "https://placehold.co/400x300/F0F4F8/FF5733?text=All-in-One",
    type: "brand",
    series: [
      {
        id: "series_all_in_one_processor",
        name: "ALL In one processor",
        description: "Multifunctional integrated processors offering comprehensive audio and video management.",
        image: "/images/Products/all_in_one_processor/CLIMBER-1005.webp",
        features: ["Integrated DSP", "Video Switching", "Modular Inputs"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_fusion_1005", 
            name: "Fusion -1005", 
            description: "Five-in-one Integrated Processor", 
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1005.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1005b.webp",
            ] 
          },
          { 
            id: "model_fusion_1008", 
            name: "Fusion -1008", 
            description: "Nine-in-one Integrated Processor", 
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1008a.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1008b.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1008c.webp",
            ] 
          },
          { 
            id: "model_fusion_1009", 
            name: "Fusion -1009", 
            description: "Twelve-in-one Integrated Processor", 
            images: [
              "/images/Products/all_in_one_processor/CLIMBER-1009.webp",
              "/images/Products/all_in_one_processor/CLIMBER-1009b.webp",
            ] 
          },
          { 
            id: "model_fusion_2009", 
            name: "Fusion -2009", 
            description: "Thirteen-in-one Integrated Processor", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-2009+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-2009+2"
            ] 
          },
          { 
            id: "model_fs_40_hdmi", 
            name: "FS-40-HDMI", 
            description: "Quad HDMI Input Card", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-40-HDMI+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-40-HDMI+2"
            ] 
          },
          { 
            id: "model_fs_41_hdmi", 
            name: "FS-41-HDMI", 
            description: "Four -way HDMI output card", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-41-HDMI+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-41-HDMI+2"
            ] 
          },
          { 
            id: "model_fs_ops_win", 
            name: "FS-OPS-WIN", 
            description: "OPS Board", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-OPS-WIN+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-OPS-WIN+2"
            ] 
          },
          { 
            id: "model_fs_via_cast", 
            name: "FS-VIA-CAST", 
            description: "Wireless screen projector card & screen projection device", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-VIA-CAST+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-VIA-CAST+2"
            ] 
          },
          { 
            id: "model_fs_md_mic", 
            name: "FS-MD-MIC", 
            description: "Wireless microphone card & Handheld microphone", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-MD-MIC+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=FS-MD-MIC+2"
            ] 
          },
        ],
      },
      {
        id: "series_touchscreen_control_panel",
        name: "Touchscreen control Panel",
        description: "High-performance wired touchscreen control panels for intuitive system interaction.",
        image: "https://placehold.co/400x300/F0F4F8/FF5733?text=Touchpanel",
        features: ["10.1 inch IPS", "ARM Architecture", "High Frequency"],
        status: "In Stock",
        type: "series",
        models: [
          { 
            id: "model_fusion_cp6", 
            name: "Fusion-CP6", 
            description: "Wired Control Touch Panel 10.1 inches, ARM architecture, up to 1.8Ghz main frequency", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP6+2"
            ] 
          },
          { 
            id: "model_fusion_cp2", 
            name: "Fusion-CP2", 
            description: "Embedded Wired Control Touch Panel 10.1 inches, ARM architecture, up to 1.8Ghz main frequency", 
            images: [
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP2+1",
              "https://placehold.co/400x300/E5E7EB/6B7280?text=Fusion-CP2+2"
            ] 
          },
        ],
      },
    ],
  },
];