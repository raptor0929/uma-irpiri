// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// import "@openzeppelin/contracts/security/Pausable.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./UmaToken.sol";
import "./UmaSBT.sol";
import "hardhat/console.sol";
//import "Finanzas.sol";

// // Llamada de las funciones Uma token
// interface UmaToken {
//     function transfer(address _cuenta, uint256 _monto) external returns (bool);
//     function balanceOf(address account) external view returns (uint256);
//     function mint(address to, uint256 amount) external;
// }

struct Soul {
        string identity;
        string name;
        string country;
        uint256 timestamp;
    }

// // Llamada de las funciones Uma SBT
// interface UmaSBT { 
//     function hasSoul(address _soul) external view returns (bool);
//     function mint(address _soul, Soul memory _soulData) external ;
// }

// //Llamada a funciona de Finanzas
// interface Finanzas { }

/////////////////////////////////////////////////
//  Inicio del Contrato UmaIrpiri
/////////////////////////////////////////////////


contract UmaIrpiri {
    bytes32 public constant INVERSOR_ROLE = keccak256("INVERSOR_ROLE");
    bytes32 public constant POSTULA_ROLE = keccak256("POSTULA_ROLE");
    bytes32 public constant PROYECTO_ROLE = keccak256("PROYECTO_ROLE");

    UmaToken public umatokenInstance; 
    UmaSBT public umasbtInstance;
    Proyecto public _newProyecto;
    UmaSBT.Soul public _soulData;
    uint256 public numProy;
    uint256 public sbtCount;
    // error CantidadIncorrectaEth();
    // event ProyectoCreado();  SubastaCreada();
    // emit SubastaCreadaPr(_auctionId, msg.sender);

    event purchaseUmaToken(address account, uint256 tokenAmount, uint256 investmentBalanceEth, string  message);
    event umaSBTcreated(address account, uint256 sbtId, string name, string message);
    event createUmaProject(address account, uint256 projectId, string message);

    struct Proyecto {
        uint256 idProyecto;
        string nombre;
        string descripcion;
        uint256 presupuesto;
        string longitud_latitud;
        uint8 nivelDesconta;
    }
    
    uint256 public balanceSC;

    mapping(address => uint256[]) public registroProyectos;
    mapping(address => uint256) public InversorBalance;

    mapping(address => bool) public inversorLista;
    mapping(address => bool) public postulaLista;
    Proyecto[] public proyectoLista;
    mapping(uint8 => mapping(address => uint256)) public listaProyectosVotados;
   
    constructor() {
        // _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        umatokenInstance = UmaToken(0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE);
        umasbtInstance = UmaSBT(0x3328358128832A260C76A4141e19E2A943CD4B6D);
    }

    // Asignar UmaSBT al Inversor
    // function crearUmaSBT(address _cuenta) onlyRole(DEFAULT_ADMIN_ROLE) {

    function crearProyectoUma(
            string memory _nombre,
            string memory _descripcion,
            uint256 presupuesto,
            string memory _longitud_latitud,
            uint8 _nivelDesconta
        ) public 
        {
        // requires y otros
        // proyectoFinaciadosLista[_cuenta] = true;

        _newProyecto = Proyecto({
            idProyecto: numProy,
            nombre: _nombre,
            descripcion: _descripcion,
            presupuesto: presupuesto,
            longitud_latitud: _longitud_latitud,
            nivelDesconta: _nivelDesconta
            });

    //         struct Proyecto {
    //     uint8 idProyecto;
    //     string nombre;
    //     string descripcion;
    //     uint256 presupuesto;
    //     string longitud_latitud;
    //     uint8 nivelDesconta;
    // }

            require(umasbtInstance.hasSoul(msg.sender), "UmaSBT necesario para crear proyecto");
            registroProyectos[msg.sender].push(numProy++);
            proyectoLista.push(_newProyecto);

            emit createUmaProject(msg.sender, numProy-1, "Project created successfully!");
            // otorgar SBT

            // emit proyectoCreado(_idProyecto, _nombre);
        }

    function votarProyecto(address _cuenta, uint8 _idProyecto) public {       
        // crear el proyecto ffff
        // if(listaProyectosVotados[_idProyecto][_cuenta] >= Proyecto.presupuesto) {
             
        //     }          
        // }
    }

    // Crear Propuestas que se van a adicionar al UMA SBT
    function crearUmaSBT (address _cuenta, string memory _name, string memory country, uint256 timestamp) public {
            _soulData = UmaSBT.Soul({
                identity: Strings.toString(sbtCount++),
                name: _name,
                country: country,
                timestamp: timestamp
            });
        // hash crear un identificador


        // SBT    
        if (!umasbtInstance.hasSoul(_cuenta)) {
            console.log(_soulData.identity, _soulData.name, _soulData.country, _soulData.timestamp);
            umasbtInstance.mint(_cuenta, _soulData);
        } 
        emit umaSBTcreated(_cuenta, sbtCount-1, _name, "SBT minted successfully!");
    }
    
    // Comprar token UMAToken para invertir
    function comprarUmaToken() external payable
        {   uint256 _miUma = 1000 * (msg.value / (10 ** 18));
            require(msg.value >= 0 ,"Debe ser mayor que cero");
            // address _cuentaSC = address(this);
            umatokenInstance.mint(msg.sender,_miUma);
            // bool exitoTransfer = umatokenInstance.transferFrom(_cuenta, amount);
            //uint256 _balance = umatokenInstance.balanceOf(_account);
            InversorBalance[msg.sender] = msg.value;
            emit purchaseUmaToken(msg.sender, _miUma, InversorBalance[msg.sender], "Token purchased successfully!");
        }


    // Inicio del Proyecto
    // function inicioFinancimiento() {}

    // Actualizar estado del UMmaSBT
    function actualizarUmaSBT() public {}

    // Cerrar el Proyecto 
    function cerrarFinanciamiento() public {}

///////////////////////////////////////////////////////////////////////////
// OTRAS FUNCIONAIDADES 
///////////////////////////////////////////////////////////////////////////

    function addToInversorList(address _cuenta) public //onlyRole(DEFAULT_ADMIN_ROLE) 
    {
        inversorLista[_cuenta] = true;
    }

    function removeFromInversorlist(address _cuenta) public //onlyRole(DEFAULT_ADMIN_ROLE)
     {
        inversorLista[_cuenta] = false;
    }
}