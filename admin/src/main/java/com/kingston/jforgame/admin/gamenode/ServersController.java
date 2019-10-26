package com.kingston.jforgame.admin.gamenode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.kingston.jforgame.admin.security.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kingston.jforgame.admin.domain.ServerInfo;
import com.kingston.jforgame.admin.gamenode.service.ServersManager;
import com.kingston.jforgame.admin.gamenode.vo.ServerList;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/server")
@PreAuthorize("hasRole('ADMIN')")
public class ServersController {

	@Autowired
	private ServersManager serversManager;

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public @ResponseBody ServerList getArticleByState(@RequestParam(value = "page", defaultValue = "1") Integer page,
													  @RequestParam(value = "count", defaultValue = "10") Integer count, HttpServletRequest request) {
		ServerList serverList = new ServerList();
		// 临时解决方案
		if (SecurityUtils.hasAuth("ADMIN")) {
			int totalCount = serversManager.getServerNodeSum();
			List<ServerInfo> servers = serversManager.getServerNodeList(page, count);
			serverList.setTotalCount(totalCount);
			serverList.setServers(servers);
		}

		return serverList;
	}

	@RequestMapping(value = "/serverIds", method = RequestMethod.GET)
	public Map<String, Object> queryServerIds() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<Integer> ids = new ArrayList<>();

		List<ServerInfo> servers = serversManager.getServerNodeList(1, Integer.MAX_VALUE);

		servers.forEach(server -> {
			ids.add(server.getId());
		});

		result.put("ids", ids);
		return result;
	}

	@GetMapping(value = "/monitor")
	public Map<String, String> serverInfo() {
		Map<String, String> result = new HashMap<>();
		
		result.put("userInfo", "2人");
		result.put("memory", "1g/2g");
		return result;
	}

}
