/* Express App */
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import customLogger from '../utils/logger'

/* My express App */
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  // gzip responses
  router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  /* define routes */
  router.get('/', (req, res) => {
    const html = `
    <html>
      <head>
        <style>
          body {
            padding: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Express via '${functionName}'</h1>

        <p>I'm using Express running via a <a href='https://www.netlify.com/docs/functions/' target='_blank'>Netlify Function</a>.</p>

        <p>Choose a route:</p>

        <div>
        <a href='/.netlify/functions/${functionName}/rutasEncontradas'> /rutasEncontradas </a>
        </div>
        <br/>  

        <div>
          <a href='/.netlify/functions/${functionName}/catalogo'> /catalogo </a>
        </div>

        <div>
          <a href='/.netlify/functions/${functionName}/catalogo/salud'> /catalogo/salud </a>
        </div>

        <div>
          <a href='/.netlify/functions/${functionName}/catalogo/salud/centrosalud'> /catalogo/salud/centrosalud </a>
        </div>

        <div>
        <a href='/.netlify/functions/${functionName}/catalogo/salud/hospital'> /catalogo/salud/hospital </a>
      </div>

      <div>
        <a href='/.netlify/functions/${functionName}/catalogo/salud/farmacia'> /catalogo/salud/farmacia </a>
      </div>

      <br/>

      <div>
      <a href='/.netlify/functions/${functionName}/catalogo/ocioentretenimiento'> /catalogo/ocioentretenimiento </a>
    </div>

        <div>
          <a href='/.netlify/functions/${functionName}/catalogo/ocioentretenimiento/centrosocial'> /catalogo/ocioentretenimiento/centrosocial </a>
        </div>

        <div>
          <a href='/.netlify/functions/${functionName}/catalogo/ocioentretenimiento/parques'> /catalogo/ocioentretenimiento/parques </a>
        </div>

        <br/>
        
        <div>
        <a href='/.netlify/functions/${functionName}/catalogo/serviciomunicipal'> /catalogo/serviciomunicipal </a>
      </div>

      <div>
        <a href='/.netlify/functions/${functionName}/catalogo/serviciomunicipal/oficina'> /catalogo/serviciomunicipal/oficina </a>
      </div>

      <div>
        <a href='/.netlify/functions/${functionName}/catalogo/serviciomunicipal/empresa'> /catalogo/serviciomunicipal/empresa </a>
      </div>
    
    
      </body>
    </html>
  `
    res.send(html)
  })

  router.get('/users', (req, res) => {
    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'joe',
        },
      ],
    })
  })

  router.get('/catalogo/ocioentretenimiento', (req, res) => {
    res.json(

    )
  })

  router.get('/catalogo/salud', (req, res) => {
    res.json(
      [
        [{
          "Salud": [{
            "id": 0,
            "nombre": "Hospital",
            "tab": "HospitalDetallePage",
            "ruta": "/tabs/DestinoPage/SaludDetallePage/HospitalDetallePage",
            "subdirecciones": [{
              "id": "1001",
              "nombre": "H. Valdecilla",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "1002",
              "nombre": "Sta. Clotilde",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 1,
            "nombre": "Centro Salud",
            "tab": "CentroSaludDetallePage",
            "ruta": "/tabs/DestinoPage/SaludDetallePage/CentroSaludDetallePage",
            "subdirecciones": [{
              "id": "2001",
              "nombre": "CS Alta",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "2002",
              "nombre": "CS Isabel II",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 2,
            "nombre": "Farmacia",
            "tab": "FarmaciaDetallePage",
            "ruta": "/tabs/DestinoPage/SaludDetallePage/FarmaciaDetallePage",
            "subdirecciones": [{
              "id": "3001",
              "nombre": "Farmacia López",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "3002",
              "nombre": "Farmacia Ruiz",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }]
      ]

    )
  })

  router.get('/catalogo/salud/centrosalud', (req, res) => {
    res.json(
      [{
        "id": 1,
        "nombre": "Centro Salud",
        "subdirecciones": [{
          "id": "2001",
          "nombre": "CS Alta",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "2002",
          "nombre": "CS Isabel II",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/catalogo/salud/hospital', (req, res) => {
    res.json(

      [{
        "id": 0,
        "nombre": "Hospital",
        "tab": "HospitalDetallePage",
        "ruta": "/tabs/DestinoPage/SaludDetallePage/HospitalDetallePage",
        "subdirecciones": [{
          "id": "1001",
          "nombre": "H. Valdecilla",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "1002",
          "nombre": "Sta. Clotilde",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/catalogo/salud/farmacia', (req, res) => {
    res.json(
      [{
        "id": 2,
        "nombre": "Farmacia",
        "subdirecciones": [{
          "id": "3001",
          "nombre": "Farmacia López",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "3002",
          "nombre": "Farmacia Ruiz",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/catalogo/serviciomunicipal', (req, res) => {
    res.json(
      [
        [{
          "serviciomunicipal": [{
            "id": 3,
            "nombre": "Oficina",
            "tab": "OficinaDetallePage",
            "ruta": "/tabs/DestinoPage/ServicioMunicipalDetallePage/OficinaDetallePage",
            "subdirecciones": [{
              "id": "4001",
              "nombre": "Ayuntamiento",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "4002",
              "nombre": "Of. Turismo",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 4,
            "nombre": "Empresa",
            "tab": "EmpresaDetallePage",
            "ruta": "/tabs/DestinoPage/ServicioMunicipalDetallePage/EmpresaDetallePage",
            "subdirecciones": [{
              "id": "5001",
              "nombre": "TUS",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "5002",
              "nombre": "Aguas",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }
        ]
      ]

    )
  })

  router.get('/catalogo/serviciomunicipal/oficina', (req, res) => {
    res.json(
      [{
        "id": 3,
        "nombre": "Oficina",
        "tab": "OficinaDetallePage",
        "ruta": "/tabs/DestinoPage/ServicioMunicipalDetallePage/OficinaDetallePage",
        "subdirecciones": [{
          "id": "4001",
          "nombre": "Ayuntamiento",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "4002",
          "nombre": "Of. Turismo",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/catalogo/serviciomunicipal/empresa', (req, res) => {
    res.json(
      [{
        "id": 4,
        "nombre": "Empresa",
        "tab": "EmpresaDetallePage",
        "ruta": "/tabs/DestinoPage/ServicioMunicipalDetallePage/EmpresaDetallePage",
        "subdirecciones": [{
          "id": "5001",
          "nombre": "TUS",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "5002",
          "nombre": "Aguas",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/rutasEncontradas', (req, res) => {
    res.json(
      [
        {
          "nombreRuta": "Ruta 1",
          "recorrido": 430,
          "desnivel": 20,
          "tiempo": "1h 20m"
        },
        {
          "nombreRuta": "Ruta 2",
          "recorrido": 400,
          "desnivel": 22,
          "tiempo": "1h 32m"
        }
      ]

    )
  })

  router.get('/catalogo/ocioentretenimiento', (req, res) => {
    res.json(
      [
        [{
          "ocioentretenimiento": [{
            "id": 5,
            "nombre": "Parques",
            "tab": "ParqueDetallePage",
            "ruta": "/tabs/DestinoPage/OcioEntretenimientoDetallePage/ParqueDetallePage",
            "subdirecciones": [{
              "id": "6001",
              "nombre": "Parque las Llamas",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "6002",
              "nombre": "Jardines Piquío",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 5,
            "nombre": "Centro social",
            "tab": "CentroSocialDetallePage",
            "ruta": "/tabs/DestinoPage/OcioEntretenimientoDetallePage/CentroSocialDetallePage",
            "subdirecciones": [{
              "id": "5001",
              "nombre": "CSoc Calle Alta",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "5002",
              "nombre": "CSoc Gral. Dávila",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }
        ]
      ]

    )
  })

  router.get('/catalogo', (req, res) => {
    res.json(
      [
        [{
          "Salud": [{
            "id": 0,
            "nombre": "Hospital",
            "subdirecciones": [{
              "id": "1001",
              "nombre": "H. Valdecilla",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "1002",
              "nombre": "Sta. Clotilde",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 1,
            "nombre": "Centro Salud",
            "subdirecciones": [{
              "id": "2001",
              "nombre": "CS Alta",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "2002",
              "nombre": "CS Isabel II",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 2,
            "nombre": "Farmacia",
            "subdirecciones": [{
              "id": "3001",
              "nombre": "Farmacia López",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "3002",
              "nombre": "Farmacia Ruiz",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }, {
          "ServiciosMunicipales": [{
            "id": 3,
            "nombre": "Oficina",
            "subdirecciones": [{
              "id": "4001",
              "nombre": "Ayuntamiento",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "4002",
              "nombre": "Of. Turismo",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 4,
            "nombre": "Empresa",
            "subdirecciones": [{
              "id": "5001",
              "nombre": "TUS",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "5002",
              "nombre": "Aguas",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }, {
          "OcioEntretenimiento": [{
            "id": 5,
            "nombre": "Parques",
            "subdirecciones": [{
              "id": "6001",
              "nombre": "Parque las Llamas",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "6002",
              "nombre": "Jardines Piquío",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }, {
            "id": 5,
            "nombre": "Centro social",
            "subdirecciones": [{
              "id": "5001",
              "nombre": "CSoc Calle Alta",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }, {
              "id": "5002",
              "nombre": "CSoc Gral. Dávila",
              "lon": -3.7962913513183594,
              "lat": 43.47076747496938
            }
            ]
          }
          ]
        }
        ]
      ]



    )
  })

  router.get('/catalogo/ocioentretenimiento/centrosocial', (req, res) => {
    res.json(
      [{
        "id": 5,
        "nombre": "Centro social",
        "subdirecciones": [{
          "id": "5001",
          "nombre": "CSoc Calle Alta",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "5002",
          "nombre": "CSoc Gral. Dávila",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]

    )
  })

  router.get('/catalogo/ocioentretenimiento/parques', (req, res) => {
    res.json(
      [{
        "id": 5,
        "nombre": "Parques",
        "subdirecciones": [{
          "id": "6001",
          "nombre": "Parque las Llamas",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }, {
          "id": "6002",
          "nombre": "Jardines Piquío",
          "lon": -3.7962913513183594,
          "lat": 43.47076747496938
        }
        ]
      }]


    )
  })

  router.get('/hello/', function (req, res) {
    res.send('hello world')
  })

  // Attach logger
  app.use(morgan(customLogger))

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}
