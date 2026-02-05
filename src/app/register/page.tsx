import React from 'react'
import styles from './register.module.css'

export default function Register() {
  return (
    <main className={styles.main_container}>
      	<div className={styles.container}>
			<div className={styles.action}>
				<button className={styles.title}>Registro</button>
			</div>
			<div className={styles.form}>
				<div className={styles.form_group}>
                    <div className={styles.field}>
                        <input className={styles.form_control} id="name" name="name" type="text" placeholder="nombre" required />
                        <label htmlFor="name" className={styles.form_label}>Nombre</label>
                    </div>

                    <div className={styles.field}>
                        <input className={styles.form_control} id="lastname" name="lastname" type="text" placeholder="apellidos" required />
                        <label htmlFor="lastname" className={styles.form_label}>Apellidos</label>
                    </div>
                </div>

                <div className={styles.form_group}>
                    <div className={styles.field}>
                        <input className={styles.form_control} id="email" name="email" type="email" placeholder="correo electronico" required />
                        <label htmlFor="email" className={styles.form_label}>Correo Electronico</label>
                    </div>

                    <div className={styles.field}>
                        <input className={styles.form_control} id="phone" name="phone" type="text" placeholder="telefono" required />
                        <label htmlFor="phone" className={styles.form_label}>Telefono</label>
                    </div>
                </div>

                <div className={styles.form_group}>
                    <div className={styles.field}>
                        <input className={styles.form_control} id="user" name="user" type="text" placeholder="usuario" required />
                        <label htmlFor="user" className={styles.form_label}>Usuario</label>
                    </div>

                    <div className={styles.field}>
                        <input className={styles.form_control} id="password" name="password" type="password" placeholder="contraseña" required />
                        <label htmlFor="password" className={styles.form_label}>Contraseña</label>
                    </div>

                    <div className={styles.field}>
                        <input className={styles.form_control} id="confirmpassword" name="confirmpassword" type="password" placeholder="contraseña" required />
                        <label htmlFor="confirmpassword" className={styles.form_label}>Confirmar Contraseña</label>
                    </div>
                </div>

				<div className={styles.bottom_group}>
					<button className={styles.button}>
						Registrar
					</button>
					<div className={styles.other_actions}>
						<p className={styles.register}>¿Ya tienes cuenta? Ingresa <a href='../login'><strong>aqui</strong></a></p>
					</div>
					
				</div>
			</div>
      </div>
    </main>
  )
}
