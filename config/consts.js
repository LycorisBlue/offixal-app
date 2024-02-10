class Consts{
    static PORT_SYSTEM = 8000;
    static APP_NAME = "Hermes-Backend";
    static APP_AUTHOR = "Ly-Web Blue";
    static NLIMIT = 10;
    static HERMES_AI_URL = "http://localhost:5000";

    static USERPROFILE_TYPE_UNDEFINED = 0;
    static USERPROFILE_TYPE_ADMIN = 1;
    static USERPROFILE_TYPE_OPERATOR = 2;
    static USERPROFILE_TYPE_CLIENT = 3;

    static USERPROFILE_TYPES = [
        {
            label: "admin",
            description: "admin User"
        },
        {
            label: "operator",
            description: "operator User"
        },
        {
            label: "client",
            description: "client User"
        }
    ];

    static INIT_USERS_TEST = [
        {
            profil_id: Consts.USERPROFILE_TYPE_ADMIN,
            name: "Lycoris",
            lastname: "Blue",
            username: "LycorisBlue",
            email: "lycorisblue99@gmail.com",
            phone: "0575635710",
            password: "kirigaya@kazuto",
        },
        {
            profil_id: Consts.USERPROFILE_TYPE_OPERATOR,
            name: "Dark",
            lastname: "Side",
            username: "Darkside",
            email: "darkside99@gmail.com",
            phone: "0575635710",
            password: "dark@side",
        },
        {
            profil_id: Consts.USERPROFILE_TYPE_CLIENT,
            name: "Lostvayne",
            lastname: "Atful",
            username: "Lostvayne99",
            email: "lostvayneatful@gmail.com",
            phone: "0575635710",
            password: "lostvayne@atful",
        },
    ];
    static INIT_USERS_PRODUCTION = [
        {
            profil_id: Consts.USERPROFILE_TYPE_ADMIN,
            name: null,
            lastname: null,
            username: null,
            email: null,
            phone: null,
            password: null,
        },
        {
            profil_id: Consts.USERPROFILE_TYPE_OPERATOR,
            name: null,
            lastname: null,
            username: null,
            email: null,
            phone: null,
            password: null,
        },
        {
            profil_id: Consts.USERPROFILE_TYPE_CLIENT,
            name: null,
            lastname: null,
            username: null,
            email: null,
            phone: null,
            password: null,
        },
    ];

    static SERVICE_TYPES = [
        "undefined", 
        "security_sign_in",
        "security_sign_out",
        "admin_new_operator",
        "admin_update_operator",
        "admin_view_operator",
        "admin_enable_operator",
        "admin_disable_operator",
        "admin_delete_operator",
        "admin_reset_operator_password",
        "admin_request_list_by_operator",
        "admin_new_client",
        "admin_update_client",
        "admin_view_client",
        "admin_enable_client",
        "admin_disable_client",
        "admin_delete_client",
        "admin_reset_client_password",
        "admin_request_list_by_client",
        "admin_view_request",
        "operator_update_request",
        "operator_view_request",
        "operator_enable_request",
        "operator_disable_request",
        "operator_delete_request",
        "operator_message_list_by_request",
        "operator_view_client",
        "client_new_request",
        "client_update_request",
        "client_view_request",
        "client_message_list_by_request",
        "client_new_message"
    ];

    static SERVICE_TYPES_FIELDS = {
        "undefined": {},
        "security_sign_in": {
            "fields": ["username", "password"],
            "types": ["string", "string"],
            "required": ["username", "password"]
        },
        "security_sign_out": {
            "fields": ["usertoken"],
            "types": ["string"],
            "required": ["usertoken"]
        },
        "admin_new_stage": {
            "fields": ["parent_stage_id", "label", "description"],
            "types": ["integer", "string", "string"],
            "required": ["label"]
        },
        "admin_update_stage": {
            "fields": ["stage_id", "label", "description"],
            "types": ["integer", "string", "string"],
            "required": ["stage_id", "label"]
        },
        "admin_view_stage": {
            "fields": ["stage_id"],
            "types": ["integer"],
            "required": ["stage_id"]
        },
        "admin_enable_stage": {
            "fields": ["stage_id"],
            "types": ["integer"],
            "required": ["stage_id"]
        },
        "admin_disable_stage": {
            "fields": ["stage_id"],
            "types": ["integer"],
            "required": ["stage_id"]
        },
        "admin_delete_stage": {
            "fields": ["stage_id"],
            "types": ["integer"],
            "required": ["stage_id"]
        },
        "admin_request_list_by_stage": {
            "fields": ["stage_id"],
            "types": ["integer"],
            "required": ["stage_id"]
        },
        "admin_new_operator": {
            "fields": ["username", "password", "firstname", "lastname", "email", "phone"],
            "types": ["string", "string", "string", "string", "string_email", "string"],
            "required": ["username", "password", "firstname", "lastname", "email", "phone"]
        },
        "admin_update_operator": {
            "fields": ["operator_id", "username", "firstname", "lastname", "email", "phone"],
            "types": ["integer", "string", "string", "string", "string", "string"],
            "required": ["operator_id", "username", "firstname", "lastname", "email", "phone"]
        },
        "admin_view_operator": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_enable_operator": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_disable_operator": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_delete_operator": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_reset_operator_password": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_request_list_by_operator": {
            "fields": ["operator_id"],
            "types": ["integer"],
            "required": ["operator_id"]
        },
        "admin_new_client": {
            "fields": ["username", "password", "firstname", "lastname", "email", "phone"],
            "types": ["string", "string", "string", "string", "string_email", "string"],
            "required": ["username", "password", "firstname", "lastname", "email", "phone"]
        },
        "admin_update_client": {
            "fields": ["client_id", "username", "firstname", "lastname", "email", "phone"],
            "types": ["integer", "string", "string", "string", "string", "string"],
            "required": ["client_id", "username", "firstname", "lastname", "email", "phone"]
        },
        "admin_view_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_enable_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_disable_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_delete_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_reset_client_password": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_request_list_by_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "admin_view_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_update_request": {
            "fields": ["request_id", "request_status"],
            "types": ["integer", "integer"],
            "required": ["request_id", "request_status"]
        },
        "operator_view_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_enable_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_disable_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_delete_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_message_list_by_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "operator_view_client": {
            "fields": ["client_id"],
            "types": ["integer"],
            "required": ["client_id"]
        },
        "client_new_request": {
            "fields": ["main_stage_id", "description"],
            "types": ["integer", "string"],
            "required": ["main_stage_id"]
        },
        "client_update_request": {
            "fields": ["request_id", "request_status"],
            "types": ["integer", "integer"],
            "required": ["request_id", "request_status"]
        },
        "client_view_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "client_message_list_by_request": {
            "fields": ["request_id"],
            "types": ["integer"],
            "required": ["request_id"]
        },
        "client_new_message": {
            "fields": ["request_id", "content"],
            "types": ["integer", "string"],
            "required": ["request_id", "content"]
        },
    };
}

module.exports = Consts;