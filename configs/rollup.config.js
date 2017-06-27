module.exports = {
    external: [
        '@angular/forms',
        'rxjs/add/operator/debounceTime'
    ],
    globals: {
        '@angular/forms': 'ng.forms',
        'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype'
    }
};
