
import { useForm } from "@tanstack/react-form"
import * as v from "valibot"
import { useState } from "react"
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { FieldInfo } from '~/components/field-info'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'

export function OrganizationRegisterPage() {
	const [open, setOpen] = useState(false)

	let FormSchema = v.object({
		organization_name: v.pipe(v.string("Nama organisasi tidak valid")),
		description: v.pipe(v.string("Silahkan deskripsikan organisasi Anda!")),
		contact_email: v.pipe(v.string("Email tidak valid"), v.email("Email tidak valid")),
		contact_phone_number: v.pipe(v.string("Nomor telepon tidak valid"), v.digits("Nomor telepon tidak valid")),
	})

	const form = useForm({
		defaultValues: {
			organization_name: "",
			description: "",
			contact_email: "",
			contact_phone_number: ""
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
							Kemitraan Organisasi
						</h1>

						<div className="space-y-4 text-lg text-gray-700 leading-relaxed">
							<p>
								Jadilah mitra kami dalam mengangkat dan melestarikan budaya Indonesia. Melalui kemitraan ini, organisasi Anda dapat
								menambahkan anggota, menyelenggarakan acara, serta berkontribusi langsung dalam eksplorasi dan promosi budaya lokal.
							</p>

							<p>
								Kami terbuka untuk bekerja sama dengan organisasi yang memiliki komitmen terhadap pelestarian tradisi, seni, dan nilai-nilai
								budaya Nusantara. Bersama, kita bisa menciptakan ruang kolaboratif untuk menghidupkan kembali warisan budaya dari Sabang hingga Merauke.
							</p>
						</div>
					</div>
				</div>

				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button className="bg-red-700 text-white px-8 py-3 text-lg font-semibold">
							Daftar Sebagai Mitra Organisasi
						</Button>
					</DialogTrigger>
					<DialogContent className="max-w-2xl">
						<DialogHeader>
							<DialogTitle className="text-2xl font-bold text-gray-900">
								Daftar Sebagai Mitra Organisasi
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
									name="organization_name"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Nama Organisasi</Label>
											<Input
												id={field.name}
												name={field.name}
												type="text"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Nama organisasi Anda"
												className="mt-1"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="description"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Deskripsi Organisasi dan Tujuan Kemitraan</Label>
											<Textarea
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Deskripsikan organisasi Anda dan tujuan kemitraan dengan kami..."
												rows={5}
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="contact_email"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Email Kontak</Label>
											<Input
												id={field.name}
												name={field.name}
												type="email"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="email@organisasi.com"
												className="mt-1"
											/>
											<FieldInfo field={field} />
										</div>
									)}
								/>

								<form.Field
									name="contact_phone_number"
									children={(field) => (
										<div className='space-y-4'>
											<Label htmlFor={field.name}>Nomor Telepon Kontak</Label>
											<Input
												id={field.name}
												name={field.name}
												type="tel"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="08123456789"
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
								Daftar Sebagai Mitra Organisasi
							</Button>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
