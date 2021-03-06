package com.kingston.jforgame.admin.channel.controller;

import com.kingston.jforgame.admin.channel.service.ChannelService;
import com.kingston.jforgame.admin.security.SecurityUtils;
import com.kingston.jforgame.admin.user.model.RoleKinds;
import com.kingston.jforgame.admin.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: Kingston
 * @Date: 2019/10/28 16:15
 */
@RestController
@RequestMapping("/channel")
public class ChannelController {

    @Autowired
    private ChannelService channelService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/children", method = RequestMethod.GET)
    public List<String> getChildrenChannels() {
        String code = userService.getCurrentUser();
        if (SecurityUtils.hasAuth(RoleKinds.ADMIN)) {
            return channelService.queryAllChannels();
        }
        return channelService.queryChildChannel(code);
    }

}
