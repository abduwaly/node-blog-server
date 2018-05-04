exports.admin = {
  "uid": 1,
  "permissions": ["auth", "auth/testPage", "auth/authPage", "auth/authPage/edit", "auth/authPage/visit"],
  "role": "系统管理员",
  "roleType": 1,
  "userName": "系统管理员"
}

exports.visitor = {
  "uid": 2,
  "permissions": ["auth", "auth/authPage", "auth/authPage/visit"],
  "role": "访客",
  "roleType": 2,
  "userName": "访客"
}