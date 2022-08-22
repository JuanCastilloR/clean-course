(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    class User extends Person {

        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const person = new Person('Juan', 'M', new Date('1999-01-31'));
    console.log({person});

    const userSettings = new UserSettings(
        '/usr/home',
        'home',
        'rejuan.castillo@gmail.com',
        'Admin',
        'Juan',
        'M',
        new Date('1999-01-31')
    );

    console.log({userSettings});


})();
