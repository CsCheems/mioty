import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <main className={styles.main_container}>
      	<div className={styles.container}>
			<div className={styles.action}>
				<button>Iniciar Sesión</button>
			</div>
			<div className={styles.form}>
				<div className={styles.form_group}>
						<input className={styles.form_control} name='user' id="user" type="text" placeholder='usuario' required/>
						<label htmlFor="user" className={styles.form_label}>Usuario</label>
				</div>
				<div className={styles.form_group}>
						<input className={styles.form_control} name='password' id="password" type="password" placeholder='contraseña' required/>
						<label htmlFor="password" className={styles.form_label}>Contraseña</label>
				</div>
				<div className={styles.bottom_group}>
					<Link 
						className={styles.button} 
						href={'../dashboard'}
					>
						Login
					</Link>
					<div className={styles.other_actions}>
						<p className={styles.register}>¿No tienes cuenta? Registrate <a href='../register'><strong>aqui</strong></a></p>
						<p className={styles.register}>Recuperar contraseña <a href='../recover'><strong>aqui</strong></a></p>
					</div>
					
				</div>
			</div>
      </div>
    </main>
  )
}
