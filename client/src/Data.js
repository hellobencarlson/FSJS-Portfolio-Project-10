// Contains a class of Data with the API 
// authentication utility methods you will use to 
// create, sign up and authenticate a user. The 
// file is mostly pre-written, making GET and POST 
// requests to the REST API, for example. For this 
// course, we're only going to focus on the 
// authentication parts.

import config from './config';

export default class Data {
    // api endpoint, get/post, content in body
    api(path, method, body = null, requiresAuth = false, credentials = null) {
        const url = config.apiURL + path;

        const options = {
            // set HTTP method
            method,
            // request headers
            headers: {
                // standard encoding type
                'Content-Type': 'application/json: charset-utf-8',
            }
        };

        if (body !== null) {
            // if body, stringify
            options.body = JSON.stringify(body);        }

        // check is auth required
        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
        
            // add authorization header through 'options', set to basic type
            options.headers['Authorization'] = `Basic ${encodedCredentials} `;
        }

        return fetch(url, options);
        // options allows different settings
    }

    async getUser(username, password) {
        // get request to /users and returns JSON obj
        // true = credentials req, and then credentials
       const  response = await this.api('/users', 'GET', null, true, { username, password });
    }

    async createUser() {
        // post request to /users
    }

    async getCourses() {
        // get request
        const response = await this.api('/', 'GET', null, true);
        if (response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }


    }


}