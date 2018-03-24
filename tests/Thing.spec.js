import Thing from '../Thing';

describe('New object', () => {
    it('can be created by extending Thing', () => {
        let animal = Thing.extend();

        expect(animal).to.be.deep.equal(Thing);
    });

    it('can be created by extending Thing with custom fields', () => {
        const voice = 'meow';
        let cat = Thing.extend({voice: voice});

        expect(cat.voice).to.equal(voice);
    });

    it('can be created by extending Thing with overrided fields', () => {
        const name = '[object Cat]';
        let cat = Thing.extend({
            voice: 'meow',
            toString: () => name
        });

        expect(cat.toString()).to.equal(name);
    });

    it('can be created by cloning Thing', () => {
        let cat = Thing.extend({voice: 'meow'});
        let kitty = cat.clone();

        expect(cat).to.be.deep.equal(kitty);
    });

    it('can be created by cloning Thing with custom fields', () => {
        let cat = Thing.extend();
        const voice = 'MEOW!';
        let lion = cat.clone({voice: voice});

        expect(lion.voice).to.equal(voice);
    });

    it('can be created by cloning Thing with overrided fields', () => {
        let cat = Thing.extend({voice: 'meow'});
        const voice = 'MEOW!';
        let lion = cat.clone({voice: voice});

        expect(lion.voice).to.equal(voice);
    });
});
