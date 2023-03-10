<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import Arrows from '$lib/images/arrows.svg';
	import ArrowRight from '$lib/images/arrowRight.svg';
	import CoinSelect from '$lib/components/CoinSelect.svelte';
	import { writable } from 'svelte/store';
	import Header from '$lib/components/Header.svelte';
	import { bigIntToFloat } from '$lib/pkg/utils';
	import { coins } from '$lib/pkg/coins';
	import ConnectWalletETH from '$lib/components/wallet/ConnectWalletETH.svelte';
	import ConnectWalletTZS from '$lib/components/wallet/ConnectWalletTZS.svelte';
	import ConnectWalletTON from '$lib/components/wallet/ConnectWalletTON.svelte';
	import { send, receive } from '$lib/animations/pages.crossfade.js';

	let ready = false;
	onMount(() => (ready = true));

	let fromSymbol = $page.url.searchParams.get('from');
	let toSymbol = $page.url.searchParams.get('to');

	let fromNetwork = writable(
		fromSymbol ? coins.findIndex((c) => c.nativeSymbol === fromSymbol) : 0
	);
	let toNetwork = writable(toSymbol ? coins.findIndex((c) => c.nativeSymbol === toSymbol) : 1);

	let assetPair = 0;

	let fromValue = writable(0.0);
	let toValue = writable(0.0);

	const switchCoins = () => {
		const from = $fromNetwork;
		fromNetwork.set($toNetwork);
		toNetwork.set(from);
	};

	let swapFee = bigIntToFloat(0, 18, 18);
</script>

<Header />

<div class="flex flex-col md:flex-row h-full justify-center items-center px-5 md:px-0">
	<div
		class="absolute bg-base-200 shadow-sm flex flex-col items-center py-4 px-5 w-full md:w-1/3 border-4 border-black"
		out:send={{ key: 'swap' }}
		in:receive={{ key: 'swap' }}
	>
		<h4 class="text-2xl mb-5">Wrapped Swap</h4>
		<div class="w-full">
			<p>from</p>
			<div class="flex flex-row justify-between items-center my-3">
				<div class="w-1/3">
					<CoinSelect selectedId={fromNetwork} excludedId={toNetwork} />
				</div>
				{#if $fromNetwork === 0}
					<ConnectWalletETH />
				{:else if $fromNetwork === 1}
					<ConnectWalletTZS />
				{:else if $fromNetwork === 2}
					<ConnectWalletTON />
				{/if}
			</div>
			<div class="flex flex-row justify-between gap-5 items-center">
				<input
					type="number"
					placeholder="0.001"
					class="input input-bordered border-black w-full"
					min="0.000"
					step="0.001"
				/>
			</div>
		</div>
		<button class="mt-6 mb-1" on:click={switchCoins}
			><img src={Arrows} width={30} alt="arrows" /></button
		>
		<div class="w-full">
			<p>to</p>
			<div class="flex flex-row justify-between items-center my-3">
				<div class="w-1/3"><CoinSelect selectedId={toNetwork} excludedId={fromNetwork} /></div>
				{#if $toNetwork === 0}
					<ConnectWalletETH />
				{:else if $toNetwork === 1}
					<ConnectWalletTZS />
				{:else if $toNetwork === 2}
					<ConnectWalletTON />
				{/if}
			</div>
			<div class="flex flex-row justify-between gap-5 items-center">
				<input
					type="number"
					placeholder="0.001"
					class="input input-bordered border-black w-full"
					min="0.000"
					step="0.001"
				/>
			</div>
		</div>
		<div class="flex flex-row justify-between w-80 mt-5">
			<div class="btn-group">
				<input
					type="button"
					name="from-options"
					value={coins[$toNetwork].wrappedSymbol}
					class={'btn btn-sm ' + (assetPair === 0 ? '' : 'btn-outline')}
					on:click={() => (assetPair = 0)}
				/>
				<input
					type="button"
					name="from-options"
					value={coins[$fromNetwork].nativeSymbol}
					class={'btn btn-sm ' + (assetPair === 1 ? '' : 'btn-outline')}
					on:click={() => (assetPair = 1)}
				/>
			</div>

			<img src={ArrowRight} width={30} alt="arrows" />

			<div class="btn-group">
				<input
					type="button"
					name="to-options"
					value={coins[$toNetwork].nativeSymbol}
					class={'btn btn-sm ' + (assetPair === 0 ? '' : 'btn-outline')}
					on:click={() => (assetPair = 0)}
				/>
				<input
					type="button"
					name="to-options"
					value={coins[$fromNetwork].wrappedSymbol}
					class={'btn btn-sm ' + (assetPair === 1 ? '' : 'btn-outline')}
					on:click={() => (assetPair = 1)}
				/>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full px-2 mt-5">
			<div class="flex flex-row justify-between">
				<p>Swap fee</p>
				<p>{swapFee}</p>
			</div>
		</div>
		<button class="btn btn-primary btn-full w-full mt-5">swap</button>
	</div>
</div>
