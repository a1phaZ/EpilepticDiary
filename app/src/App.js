import './App.css';
import List from "./components/timeline/List.component";

const mock = [
	{
		type: 'сон',
		subType: 'начало',
		time: new Date().getTime(),
		color: 'badge-primary'
	},
	{
		type: 'сон',
		subType: 'конец',
		quality: 3,
		time: new Date().getTime(),
		color: 'badge-primary'
	},
	{
		type: 'еда',
		description: 'Брокколи с яйцом',
		time: new Date().getTime(),
		color: 'badge-success'
	},
	{
		type: 'Лекарства',
		drugs: [
			{
				title: 'Депакин',
				dosage: '150',
			},
			{
				title: 'Магний',
				dosage: '200',
			}
		],
		time: new Date().getTime(),
		color: 'badge-warning'
	},
	{
		type: 'Приступы',
		count: 10,
		series: true,
		strength: 1,
		time: new Date().getTime(),
		color: 'badge-danger'
	},
]

function App() {
	const _currentDate = new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date());
	return (
		<div className="row d-flex justify-content-center mt-70 mb-70">
			<div className="col-md-6">
				<div className="main-card mb-3 card">
					<div className="card-body">
						<h5 className="card-title">{_currentDate}</h5>
						<List data={mock} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
