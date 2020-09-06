var APP_DATA = {
    "scenes": [
      {
        "id": "0-exterior-passageway-",
        "name": "Exterior Passageway ",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          }
        ],
        "faceSize": 875,
        "initialViewParameters": {
          "yaw": 1.8093526078941728,
          "pitch": 0.0021280301359745124,
          "fov": 1.560836192860631
        },
        "linkHotspots": [
          {
            "yaw": 1.5267694048010414,
            "pitch": 0.5078073819320039,
            "rotation": 0,
            "target": "1-hologallery-entrance"
          },
          {
            "yaw": 1.555731087061119,
            "pitch": 0.16018647465741864,
            "rotation": 0,
            "target": "12-studio-doors-open-at-hall-exterior"
          },
          {
            "yaw": 3.1014314243679353,
            "pitch": 0.1736594937205247,
            "rotation": 0,
            "target": "18-volumetric-capture-stage-open"
          }
        ],
        "infoHotspots": [
          {
            "yaw": 2.8819914268131903,
            "pitch": 0.15014522388823615,
            "title": "Dimension - London",
            "text": [""],
            "link": ["https://www.dimensionstudio.co/"],
            "linkText": ["<u>dimensionstudio.co</u>"],
          },
          {
            "yaw": 2.8803137990623258,
            "pitch": -0.03293424805527856,
            "title": "Avatar - St. Louis",
            "text": [""],
            "link": ["http://avatar-studios.com/"],
            "linkText": ["<u>avatar-studios.com</u>",]
          },
          {
            "yaw": 0.7591500911693405,
            "pitch": -0.020075817996383805,
            "title": "Welcome to Avatar Dimension",
            "text": [
              "The AD Studio is a volumetric capture film studio located outside of Washington D.C.&nbsp;<div><br></div><div>Design by August Green</div>",
              "Visualization by Kaleidoskope",
            ],
            "link": [
              "https://www.augustgreen.com",
              "https://www.kaleidoskope.io",
            ],
            "linkText": [
              "<u>augustgreen.com</u>",
              "<u>kaleidoskope.io</u>",
            ]
          }
        ]
      },
      {
        "id": "1-hologallery-entrance",
        "name": "Hologallery Entrance",
        "levels": [
          {
            "tileSize": 256,
            "size": 256,
            "fallbackOnly": true
          },
          {
            "tileSize": 512,
            "size": 512
          },
          {
            "tileSize": 512,
            "size": 1024
          }
        ],
        "faceSize": 875,
        "initialViewParameters": {
          "pitch": 0,
          "yaw": 0,
          "fov": 1.5707963267948966
        },
        "linkHotspots": [
          {
            "yaw": -1.6794695716394372,
            "pitch": 0.5929639765286101,
            "rotation": 0,
            "target": "0-exterior-passageway-"
          },
          {
            "yaw": 1.5470865857750056,
            "pitch": 0.2576049058193224,
            "rotation": 0,
            "target": "12-studio-doors-open-at-hall-exterior"
          },
          {
            "yaw": 0.03582801910778244,
            "pitch": 0.5491864016482904,
            "rotation": 0,
            "target": "2-hologallery-interior"
          }
        ],
        "infoHotspots": []
      }
    ]
}