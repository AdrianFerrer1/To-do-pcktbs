<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import '../app.postcss';

	// onMount(() => {
	//     console.log("Mounting");
	//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
	//         const currentPath = window.location.pathname;
	//         if (!user && !nonAuthRoutes.includes(currentPath)) {
	//             window.location.href = "/";
	//             return;
	//         }
	//         if (user && currentPath === "/") {
	//             window.location.href = "/dashboard";
	//             return;
	//         }
	//         if (!user) {
	//             return;
	//         }
	//         let dataToSetToStore;
	//         const docRef = doc(db, "users", user.uid);
	//         const docSnap = await getDoc(docRef);
	//         if (!docSnap.exists()) {
	//             console.log("Creating User");
	//             const userRef = doc(db, "users", user.uid);
	//             dataToSetToStore = {
	//                 email: user.email,
	//                 todos: [],
	//             };
	//             await setDoc(userRef, dataToSetToStore, { merge: true });
	//         } else {
	//             console.log("Fetching User");
	//             const userData = docSnap.data();
	//             dataToSetToStore = userData;
	//         }
	// 		pb.collection("a").update(curr => {
	//             return {
	//                 ...curr,
	//                 user,
	//                 data: dataToSetToStore,
	//                 loading: false,
	//             };
	//         });
	//         authStore.update((curr) => {
	//             return {
	//                 ...curr,
	//                 user,
	//                 data: dataToSetToStore,
	//                 loading: false,
	//             };
	//         });
	//     });
	//     return unsubscribe;
	// });
</script>

<div class="mainContainer">
	<slot />
</div>

<style>
	.mainContainer {
		min-height: 100vh;
		background: linear-gradient(to right, #000428, #000046);
		color: white;
		position: relative;
		display: flex;
		flex-direction: column;
		max-width: 100%;
		margin: none;
	}
</style>
