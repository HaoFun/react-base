import config from './config'

export const login_api = `${config.api_domain}/login`
// login_api mock example
// {
// 	"status": true,
// 	"data": {
// 	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91YXQtZXJwLWFwaS5jb250aW4tdGVzdGluZy1zaXRlLmNvbVwvYXBpXC91c2VyXC9sb2dpbiIsImlhdCI6MTUzMjA2NjI0MiwiZXhwIjoxNTMyMDY5NzIyLCJuYmYiOjE1MzIwNjYyNDIsImp0aSI6Im50OEtZTlRtbElnQ3NkVEsiLCJzdWIiOjEwODIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ3YXJlaG91c2VfaWQiOm51bGwsImFjY291bnRfdHlwZSI6IkVSUCIsImxhbmciOiJFTiIsImNvdW50cnlfY29kZSI6IlRIIn0.AKhbWtLusvNPtk7ra0W7hojQ3-kZNtSGFE83n4zi7BQ",
// 		"access_token_type": "bearer",
// 		"expires": 0.5,
// 		"expires_type": "day"
//   }
// }

export const auth_me_api = `${config.api_domain}//auth/me`
// auth_me_api mock example
// {
// 	"status": true,
// 	"data": {
// 	"id": 1,
// 		"name": "Guest",
// 		"username": "Bret",
// 		"email": "Sincere@april.biz",
// 		"permissions": [
// 		{
// 			"id": 2,
// 			"icon": "home",
// 			"parent_id": 1,
// 			"component": "main",
// 			"path": "/main",
// 			"layout": "main",
// 			"label": "main_label"
// 		},
// 		{
// 			"id": 3,
// 			"icon": "search",
// 			"parent_id": 1,
// 			"component": "minor",
// 			"path": "/minor",
// 			"layout": "main",
// 			"label": "minor_label"
// 		},
// 		{
// 			"id": 1,
// 			"icon": "th-large",
// 			"parent_id": null,
// 			"component": "home",
// 			"path": null,
// 			"layout": null,
// 			"label": "test_label"
// 		}
// 	]}
// }