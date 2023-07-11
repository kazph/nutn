import { HoverCard } from "@kobalte/core";

export function Test(props: {
	pictogram: string;
	title: string;
	href: string;
    documentation_page: string; 
    description: string,
}) {
	return (
		<HoverCard.Root>
			<HoverCard.Trigger
				class="border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-800"
				href={props.href}
			>
				<div
					class="w-2/5 min-w-[3rem] p-2 fill-gray-700 dark:fill-gray-200"
					innerHTML={props.pictogram}
				/>
				<h2 class="font-semibold text-gray-700 dark:text-gray-200 text-lg" innerHTML={props.title} />
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content class="bg-white dark:bg-gray-800 p-4 w-64 border-2 border-gray-200 rounded shadow-md">
					<HoverCard.Arrow class="rounded-none" />
					<h4 class="text-sm font-bold dark:text-gray-200" innerHTML={props.title} />
					<p class="dark:text-gray-200">{props.description}</p>

					{props.documentation_page && 
						<a
						href={props.documentation_page}
						class="text-sm text-blue-800 dark:text-blue-500 font-semibold hover:underline"
						target="_blank"
						>
							NTNUs Dokumentasjon
						</a>
					}
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
}
