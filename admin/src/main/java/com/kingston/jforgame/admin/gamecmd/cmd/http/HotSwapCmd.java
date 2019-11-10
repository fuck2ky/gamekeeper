package com.kingston.jforgame.admin.gamecmd.cmd.http;

import com.kingston.jforgame.admin.domain.ServerInfo;
import com.kingston.jforgame.admin.gamecmd.cmd.CmdTypes;

public class HotSwapCmd extends HttpServerAdminCmd {

    public HotSwapCmd(ServerInfo serverNode, String params) {
        super(serverNode, params);
    }

    @Override
    public String httpMethod() {
        return "hotSwap";
    }

    @Override
    public String action() {
        String url = url();
        return httpGet(url);
    }

    @Override
    public CmdTypes meta() {
        return CmdTypes.HOT_SWAP;
    }
}
