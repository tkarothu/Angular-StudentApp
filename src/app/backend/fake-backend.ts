﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '../models/user';
import { Role } from '../models/role';

const users: User[] = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'student', password: 'student', firstName: 'Normal', lastName: 'User', role: Role.User }
];



@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

intercept(request: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {
    const { url, method, headers, body } = request;

    let students = [
        { id: 1, name: 'John', address: 'Hyderabad' },
        { id: 2, name: 'Paul', address: 'Banglore' },
        { id: 3, name: 'Peter', address: 'Chennia' }
    ];

    // wrap in delayed observable to simulate server api call
    return of(null )
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

    function handleRoute() {
    switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
        case url.endsWith('/users') && method === 'GET':
            return getUsers();
        case url.endsWith('/register') && method === 'POST':
            return registerStudent();
        default :
            // pass through any requests not handled above
            return next.handle(request);
    }

}

// route functions

function authenticate() {
    const { username, password } = body;
    const user = users.find(x => x.username === username && x.password === password);
    if (!user) return error('Username or password is incorrect');
    return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    });
}

function getUsers() {
    return ok(students);
}

function registerStudent() {
    const { name, address } = body;
    const student = {
        id: students[students.length -1].id++,
        name: name,
        address: address.city
    }
    students.push(student);
    if (!body) return error('Registration not happened');
    return ok(student);
}


// helper functions

function ok(body) {
    return of(new HttpResponse({ status: 200, body }));
}

function error(message) {
    return throwError({ status: 400, error: { message } });
}
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
