const express = require('express');
const app = express();
const port = 3000;

app.post('/api/v1/ws-intit-terminal-json', (req, res) => {
    res.json({
        "success": true,
        "code": 200,
        "message": "Pas de réseau d'établissement défini, Initialisation Etablissement Root !!",
        "data": {
            "pointService": {
                "codeEtab": "01",
                "codePointService": "PS_01",
                "prefixeEtab": "6703",
                "prefixeCarte": "671960",
                "prefixeNumeroTicket": "67",
                "adressePointService": "Parcelles assainies, Unite 7 , villa No 391",
                "emailEtab": "florent.gnadjro@sensoft.sn",
                "emailResponsable": "florent.gnadjro@sensoft.sn",
                "intituleResponsable": "ademe - DAOU CHEICKNA",
                "libEtab": "SENSOFT",
                "libPointService": "PS_620fc056-596b-44d6-9fdc-27f164ebe9dc",
                "numeroTerminal": "TG00001",
                "telMobileResponsable": "",
                "telPointService": "+221338290663",
                "coursGasoil": 680.0,
                "coursEssence": 920.0,
                "serviceList": "C|B|A|T",
                "cleSecretKey": "JepnOwRMwsHE1n8vtWtXVCY4ru9K3+/N",
                "cleKeyABloc": "KhoaIOPOWPs=",
                "cleKeyBBloc": "YjcIrhMNy5c=",
                "currentDateTime": "2026/05/11 13:56",
                "logoEtab": "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",
                "idSession": "000000",
                "refTerminal": "0001",
                "fraisList": "null",
                "isAfficheSolde": 1,
                "indFidelite": 0,
                "indKilometrage": 0,
                "isFullOnlineEtab": "0",
                "urlWso2": "",
                "urlWso2Api": "",
                "endPointSynchTrxApi": "",
                "clientId": "",
                "clientSecret": "",
                "endpoint": "",
                "getTokenEndpoint": "",
                "refreshTokenEndpoint": "",
                "clientAuthorisation": ""
            },
            "pointServiceUserDetails": [
                {
                    "intituleUserPointService": "1001 - PITTIE DORYE",
                    "pointServiceId": 1,
                    "username": "1001",
                    "password": "fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71",
                    "userType": "POMP"
                },
                {
                    "intituleUserPointService": "8001 - LEHREITANY HABSATOU",
                    "pointServiceId": 1,
                    "username": "8001",
                    "password": "242d1f9ba9fbda48e877c20dd4de8e9a0074e98add3de4856115ab61863786c5",
                    "userType": "BOUT"
                }
            ],
            "pointServiceEtabDetails": [
                {
                    "codePointService": "PS_01",
                    "codeEtab": "01",
                    "libEtab": "SENSOFT",
                    "version": "",
                    "seuilMinimal": 5000.0,
                    "indEspece": 0,
                    "indFidelite": 0
                }
            ],
            "pointServiceUserMenus": [
                {
                    "code": "0001",
                    "codeParent": "",
                    "libelleCourt": "Vente",
                    "libelleComplet": "Vente",
                    "userType": "BOUT"
                },
                {
                    "code": "0003",
                    "codeParent": "",
                    "libelleCourt": "Solde carte",
                    "libelleComplet": "Solde carte",
                    "userType": "BOUT"
                },
                {
                    "code": "0004",
                    "codeParent": "",
                    "libelleCourt": "Fidélité",
                    "libelleComplet": "Fidélité",
                    "userType": "BOUT"
                },
                {
                    "code": "0005",
                    "codeParent": "",
                    "libelleCourt": "Journal",
                    "libelleComplet": "Journal",
                    "userType": "BOUT"
                },
                {
                    "code": "0007",
                    "codeParent": "",
                    "libelleCourt": "Menu divers",
                    "libelleComplet": "Menu divers",
                    "userType": "BOUT"
                },
                {
                    "code": "8001",
                    "codeParent": "0007",
                    "libelleCourt": "Remontée offline",
                    "libelleComplet": "Remontée opération offline",
                    "userType": "BOUT"
                },
                {
                    "code": "8002",
                    "codeParent": "0007",
                    "libelleCourt": "Rafraîchir liste noire",
                    "libelleComplet": "Rafraîchissement liste noire",
                    "userType": "BOUT"
                },
                {
                    "code": "8003",
                    "codeParent": "0007",
                    "libelleCourt": "Remontée cartes",
                    "libelleComplet": "Remontée cartes",
                    "userType": "BOUT"
                },
                {
                    "code": "8005",
                    "codeParent": "0007",
                    "libelleCourt": "Encodage cartes",
                    "libelleComplet": "Encodage carte",
                    "userType": "BOUT"
                },
                {
                    "code": "8006",
                    "codeParent": "0007",
                    "libelleCourt": "Recharge carte",
                    "libelleComplet": "Recharge carte",
                    "userType": "BOUT"
                },
                {
                    "code": "8007",
                    "codeParent": "0007",
                    "libelleCourt": "Paramétrage",
                    "libelleComplet": "Paramétrage",
                    "userType": "BOUT"
                },
                {
                    "code": "0001",
                    "codeParent": "",
                    "libelleCourt": "Vente",
                    "libelleComplet": "Vente",
                    "userType": "POMP"
                },
                {
                    "code": "0002",
                    "codeParent": "",
                    "libelleCourt": "Ticket",
                    "libelleComplet": "Ticket",
                    "userType": "POMP"
                },
                {
                    "code": "0003",
                    "codeParent": "",
                    "libelleCourt": "Solde carte",
                    "libelleComplet": "Solde carte",
                    "userType": "POMP"
                },
                {
                    "code": "0005",
                    "codeParent": "",
                    "libelleCourt": "Journal",
                    "libelleComplet": "Journal",
                    "userType": "POMP"
                },
                {
                    "code": "0006",
                    "codeParent": "",
                    "libelleCourt": "Code électronique",
                    "libelleComplet": "Code électronique",
                    "userType": "POMP"
                },
                {
                    "code": "0007",
                    "codeParent": "",
                    "libelleCourt": "Menu divers",
                    "libelleComplet": "Menu divers",
                    "userType": "POMP"
                },
                {
                    "code": "8001",
                    "codeParent": "0007",
                    "libelleCourt": "Remontée offline",
                    "libelleComplet": "Remontée opération offline",
                    "userType": "POMP"
                },
                {
                    "code": "8002",
                    "codeParent": "0007",
                    "libelleCourt": "Rafraîchir liste noire",
                    "libelleComplet": "Rafraîchissement liste noire",
                    "userType": "POMP"
                },
                {
                    "code": "8003",
                    "codeParent": "0007",
                    "libelleCourt": "Remontée cartes",
                    "libelleComplet": "Remontée cartes",
                    "userType": "POMP"
                },
                {
                    "code": "8005",
                    "codeParent": "0007",
                    "libelleCourt": "Encodage cartes",
                    "libelleComplet": "Encodage carte",
                    "userType": "POMP"
                },
                {
                    "code": "8006",
                    "codeParent": "0007",
                    "libelleCourt": "Recharge carte",
                    "libelleComplet": "Recharge carte",
                    "userType": "POMP"
                },
                {
                    "code": "8007",
                    "codeParent": "0007",
                    "libelleCourt": "Paramétrage",
                    "libelleComplet": "Paramétrage",
                    "userType": "POMP"
                }
            ],
            "profileCarteRoot": [
                {
                    "profileCarte": {
                        "code": "PC_01",
                        "libelle": "Confort",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "0",
                        "montantDotation": "",
                        "serviceList": "T|C|A|B",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 250000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "PP",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_01",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_02",
                        "libelle": "Gold",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "0",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 100000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "PP",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_02",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_03",
                        "libelle": "Platinium",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 250000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "0",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 3275000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "PP",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_03",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_04",
                        "libelle": "Dotation Conso Dotation Conso Dotation Conso",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "1",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 100000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "DOT",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_04",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_05",
                        "libelle": "Dotation recharge Dotation recharge Dotation recharge",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "1",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 100000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "DOT",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_05",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_06",
                        "libelle": "Silver",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "0",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 100000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "PP",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_06",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_07",
                        "libelle": "Prépayé",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 50000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "0",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 100000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "PP",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_07",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                },
                {
                    "profileCarte": {
                        "code": "PC_08",
                        "libelle": "Dotation Conso Spéciale",
                        "prefixeEtab": "6703",
                        "joursInterdits": "",
                        "plafondOfflineMois": 5000000.0,
                        "isDotationTerminal": "0",
                        "isDotationCumulable": "1",
                        "montantDotation": "",
                        "serviceList": "C|B|A|T",
                        "currentDateTime": "2026/05/11 13:56",
                        "montantMaxTransaction": 5000000.0,
                        "uniteRecharge": "VM",
                        "typeProfile": "DOT",
                        "indPaiementDeplace": "0",
                        "isFullOnline": "1"
                    },
                    "regionProfileCarte": [
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DKR",
                            "libelleRegion": "Dakar"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TH",
                            "libelleRegion": "Thiés"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SL",
                            "libelleRegion": "Saint-Louis"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "DL",
                            "libelleRegion": "Diourbel"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "FK",
                            "libelleRegion": "Fatick"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KF",
                            "libelleRegion": "Kaffrine"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KG",
                            "libelleRegion": "Kédougou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KL",
                            "libelleRegion": "Kaolack"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "KD",
                            "libelleRegion": "Kolda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "LG",
                            "libelleRegion": "Louga"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "MT",
                            "libelleRegion": "Matam"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "SD",
                            "libelleRegion": "Sédhiou"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "TM",
                            "libelleRegion": "Tambacounda"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "ZG",
                            "libelleRegion": "Ziguinchor"
                        },
                        {
                            "codeProfileCarte": "PC_08",
                            "codeRegion": "Mb",
                            "libelleRegion": "Mbour"
                        }
                    ]
                }
            ]
        }
    });
});

app.post('/api/v1/gw-biller/credit-card', (req, res) => {
    res.json({
        "success": true,
        "code": 200,
        "message": "L'operation de recharge s'est bien deroulee.",
        "data": [
            {
                "refPaiement": "REF-CREDIT-TEST-001",
                "idSession": "SESSION-CREDIT-TEST-001",
                "numeroTransaction": "OPE-ROOT-2026-5-10",
                "dateTransaction": "20/05/2026 18:30:15",
                "numeroCarte": "CYN-2026-9988",
                "soldeOnline": 75000.0,
                "typeOperation": "WAVE"
            }
        ]
    });
});

app.post('/api/v1/gw-biller/debit-card', (req, res) => {
    res.json({
        "success": true,
        "code": 200,
        "message": "Debit effectue avec succes.",
        "data": [
            {
                "idSession": "SESSION-DEBIT-TEST-001",
                "numeroTransaction": "OPE-ROOT-2026-5-11",
                "dateTransaction": "20/05/2026 18:35:42",
                "numeroCarte": "CYN-2026-9988",
                "montant": 5000.0,
                "soldeAvant": 50000.0,
                "soldeOnline": 110000.0,
                "typeOperation": "RETRAIT"
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});