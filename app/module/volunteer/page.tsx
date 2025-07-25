import { useForm } from "@tanstack/react-form"
import * as v from "valibot"
import { useState } from "react"
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { FieldInfo } from '~/components/field-info'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'

export function VolunteerRegistrationPage() {
	const [open, setOpen] = useState(false)

	let FormSchema = v.object({
		reason: v.pipe(v.string("Silahkan perkenalkan dirimu!")),
		institution: v.pipe(v.string()),
	})

	const form = useForm({
		defaultValues: {
			reason: "",
			institution: ""
		},
		validators: {
			onChange: FormSchema
		},
		onSubmit: async ({ value }) => {
			console.log(value)
			setOpen(false)
		},
	})

	return (
		<div className="w-full max-w-screen-2xl mx-auto px-10">
			<div className="flex flex-col gap-16 items-start">
				<div className="space-y-8">
					<div className="space-y-6">
						<h1 className="text-4xl font-bold text-gray-900">
							Menjadi Relawan
						</h1>

						<div className="space-y-4 text-lg text-gray-700 leading-relaxed">
							<p>
								Bergabunglah dengan komunitas kami untuk mengeksplorasi, mendokumentasikan, dan merayakan kekayaan budaya Indonesia.
								Dari tarian tradisional hingga ritual adat, setiap sudut Nusantara menyimpan kisah yang layak dikenali dan dibagikan.
							</p>

							<p>
								Kami mencari individu yang antusias, peduli, dan tertarik memperdalam pemahaman tentang tradisi lokal.
								Tak perlu menjadi ahli budaya—cukup dengan semangat untuk belajar, berdialog, dan menjaga warisan bangsa tetap hidup.
							</p>
						</div>
					</div>
				</div>

				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button className="bg-red-700 text-white px-8 py-3 text-lg font-semibold">
							Daftar Sebagai Relawan
						</Button>
					</DialogTrigger>
					<DialogContent className="max-w-2xl">
						<DialogHeader>
							<DialogTitle className="text-2xl font-bold text-gray-900">
								Daftar Sebagai Relawan
							</DialogTitle>
						</DialogHeader>

						<form
							onSubmit={(e) => {
								e.preventDefault()
								e.stopPropagation()
								form.handleSubmit()
							}}
							className="space-y-6"
						>
							<div className="space-y-4">
								<form.Field
									name="reason"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Ceritakan tentang diri Anda dan alasan ingin menjadi relawan</Label>
											<Textarea
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Perkenalkan diri Anda dan jelaskan motivasi menjadi relawan..."
												rows={5}
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="institution"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Asal Institusi/Organisasi (Opsional)</Label>
											<Input
												id={field.name}
												name={field.name}
												type="text"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Nama universitas, perusahaan, atau organisasi"
												className="mt-1"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>
							</div>

							<Button
								type="submit"
								disabled={!form.state.canSubmit}
								className="w-full bg-red-700 text-white py-3 text-lg font-semibold"
							>
								Daftar Sebagai Relawan
							</Button>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
