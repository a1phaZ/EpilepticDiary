export function filteredByAttack (items, filterType) {
	return items.filter(({type}) => type.toLowerCase() === filterType.toLowerCase());
}

//TODO Сделать универсальным
export function reduceAttackByDate(items) {
	return items.reduce((acc, item) => {
		const idx = acc.findIndex(({date}) => date === item.date);
		
		if (idx === -1) {
			return [...acc, {date: item.date, count: +item.count, strength: +item.strength, n: 1}];
		} else {
			const {count, strength, n} = acc[idx];
			const _count = count + +item.count;
			const _strength = strength + +item.strength;
			const _n = n + 1;
			acc[idx] = {...acc[idx], count: _count, strength: _strength, n: _n};
			return acc;
		}
	}, []);
}

//TODO Сделать универсальным
export function prepareAttackColumns(items) {
	let attacksArray = [['x'], ['y0'], ['y1']];
	items.forEach(({date, count, strength, n}) => {
		attacksArray[0].push(date);
		attacksArray[1].push(+count);
		attacksArray[2].push(+(strength/n).toFixed(2));
	});
	
	return attacksArray;
}

export function data4Stats (opts) {
	const {colors, columns, names, types} = opts
	const _colors = _reduce(colors, {});
	const _names = _reduce(names, {});
	const _types = _reduce(types, {x: 'x'});
	
	return {
		colors: _colors,
		columns: columns,
		names: _names,
		types: _types
	}
}

function _reduce(arr, accumulator) {
	return arr.reduce((acc, str, idx) => {
		return {
			...acc,
			[`y${idx}`]: str,
		}
	}, accumulator);
}