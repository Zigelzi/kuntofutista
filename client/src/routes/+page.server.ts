export const load = () => {
	const teams = [
		{
			clubName: 'VJS',
			teamName: 'Kuntofutis',
			address: {
				street: 'Martinkyläntie 1',
				postalCode: '01670',
				city: 'Vantaa'
			},
			location: 'Myyrmäki, Länsi-Vantaa',
			practises: [
				{
					weekday: 'Maanantai',
					startTime: '21:00',
					endTime: '22:00'
				}
			]
		}
	];

	return { teams };
};
