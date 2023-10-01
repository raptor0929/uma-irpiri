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
        address wallet;
    }

    uint256 public balanceSC;

    mapping(address => uint256[]) public registroProyectos;
    mapping(address => uint256) public InversorBalance;

    mapping(address => bool) public inversorLista;
    mapping(address => bool) public postulaLista;
    Proyecto[] public projectList;

    mapping(uint8 => mapping(address => uint256)) public listaProyectosVotados;

    constructor(address UmaTokenAddress, address UmaSBTAddress) {
        // _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        umatokenInstance = UmaToken(UmaTokenAddress);
        umasbtInstance = UmaSBT(UmaSBTAddress);

    }

    // Asignar UmaSBT al Inversor
    // function crearUmaSBT(address _cuenta) onlyRole(DEFAULT_ADMIN_ROLE) {

    function crearProyectoUma(
            string memory _nombre,
            string memory _descripcion,
            uint256 presupuesto,
            string memory _longitud_latitud,
            uint8 _nivelDesconta,
            address _wallet
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
            nivelDesconta: _nivelDesconta,
            wallet: _wallet
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
            projectList.push(_newProyecto);

            emit createUmaProject(msg.sender, numProy-1, "Project created successfully!");
            // otorgar SBT

            // emit proyectoCreado(_idProyecto, _nombre);
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
    function comprarUmaToken() external payable {
        uint256 _miUma = msg.value / (10 ** 18);
        require(msg.value >= 0 ,"Debe ser mayor que cero");
        umatokenInstance.mint(msg.sender,_miUma);
        InversorBalance[msg.sender] = msg.value;

        emit purchaseUmaToken(msg.sender, _miUma, InversorBalance[msg.sender], "Token purchased successfully!");
    }


    // Inicio del Proyecto
    // function inicioFinancimiento() {}

///////////////////////////////////////////////////////////////////////////
// OTRAS FUNCIONAIDADES 
///////////////////////////////////////////////////////////////////////////
    function accessProjectAtIndex(uint256 index) public view returns (Proyecto memory) {
        return projectList[index];
    }

    function getNumProy() public view returns (uint256) {
        return numProy;
    }

}