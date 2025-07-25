import { useForm } from '@tanstack/react-form'
import * as v from 'valibot'
import { Image } from "@unpic/react"
import { NavLink } from "react-router"
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { FieldInfo } from '~/components/field-info'

export function LoginPage() {
	const FormSchema = v.object({
		email: v.pipe(v.string("Email tidak valid"), v.email("Email tidak valid")),
		password: v.pipe(v.string("Password tidak valid"), v.minLength(8, "Password minimal delapan karakter"))
	})

	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		validators: {
			onChange: FormSchema
		},
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})

	return (
		<div className="flex justify-center w-full px-10">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<NavLink to="/" className="inline-block">
						<Image
							src="/icon/inago-png.png"
							layout="constrained"
							width={100}
							height={90}
							className="object-contain mx-auto"
						/>
					</NavLink>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						e.stopPropagation()
						form.handleSubmit()
					}}
					className="space-y-6"
				>
					<div className="space-y-5">
						<form.Field
							name="email"
							children={(field) => (
								<div className='space-y-2'>
									<Label htmlFor={field.name}>Email address</Label>
									<Input
										id={field.name}
										name={field.name}
										type="email"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										className="mt-1"
									/>
									<FieldInfo field={field} />
								</div>
							)}
						/>

						<form.Field
							name="password"
							children={(field) => (
								<div className='space-y-2'>
									<Label htmlFor={field.name}>Password</Label>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
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
						className="w-full bg-red-700"
					>
						Sign in
					</Button>
				</form>

				<div className="text-center">
					<p className="text-sm text-gray-600">
						Don't have an account?{' '}
						<NavLink
							to="/auth/register"
							className="font-medium text-red-600 hover:text-red-500"
						>
							Register here
						</NavLink>
					</p>
				</div>
			</div>
		</div>
	)
}
