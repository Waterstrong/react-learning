// npm run ava -- -t ./test/user.test.js

import User from '../demo/User'
import test from 'ava'

const user = new User(1, 'Water')

test('test hello method', t => {
	t.is(user.hello('World'), 'Hello World, I am Water')
})

test('test report method', t => {
	t.deepEqual(user.report(), {id: 1, name: 'Water', favor: []})
})

test('test addFavor method', t => {
	user.addFavor('apple');
	t.deepEqual(user.favor, ['apple']);
})