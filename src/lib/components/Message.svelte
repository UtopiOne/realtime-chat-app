<script lang="ts">
	import moment from 'moment';

	export let contents: string;
	export let author: string;
	export let time: string;

	export const formatDate = (dateString: string): string => {
		const date = moment(dateString, 'YYYYMMDDHHmmss');

		if (moment().isSame(date, 'day')) {
			return moment.duration(date.diff(moment(), 'milliseconds')).humanize(true);
		} else {
			return date.format('YYYY/MM/DD');
		}
	};
</script>

<div class="grid grid-rows-2 grid-cols-1 bg-stone-700 p-4 rounded-lg text-white w-88">
	<p class="col-start-1 col-end-2">{contents}</p>
	<p class="row-start-2 col-span-1 mt-3">by {author}</p>
	<p class="row-start-2 justify-end mt-3">
		{formatDate(time)}
	</p>
</div>
