// Copyright 1998-2017 Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	C++ class header boilerplate exported from UnrealHeaderTool.
	This is automatically generated by the tools.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

PRAGMA_DISABLE_DEPRECATION_WARNINGS
#ifdef OCEANPLUGIN_BuoyancyComponent_generated_h
#error "BuoyancyComponent.generated.h already included, missing '#pragma once' in BuoyancyComponent.h"
#endif
#define OCEANPLUGIN_BuoyancyComponent_generated_h

#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_RPC_WRAPPERS
#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_RPC_WRAPPERS_NO_PURE_DECLS
#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_INCLASS_NO_PURE_DECLS \
	private: \
	static void StaticRegisterNativesUBuoyancyComponent(); \
	friend OCEANPLUGIN_API class UClass* Z_Construct_UClass_UBuoyancyComponent(); \
	public: \
	DECLARE_CLASS(UBuoyancyComponent, UMovementComponent, COMPILED_IN_FLAGS(0), 0, TEXT("/Script/OceanPlugin"), NO_API) \
	DECLARE_SERIALIZER(UBuoyancyComponent) \
	/** Indicates whether the class is compiled into the engine */ \
	enum {IsIntrinsic=COMPILED_IN_INTRINSIC};


#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_INCLASS \
	private: \
	static void StaticRegisterNativesUBuoyancyComponent(); \
	friend OCEANPLUGIN_API class UClass* Z_Construct_UClass_UBuoyancyComponent(); \
	public: \
	DECLARE_CLASS(UBuoyancyComponent, UMovementComponent, COMPILED_IN_FLAGS(0), 0, TEXT("/Script/OceanPlugin"), NO_API) \
	DECLARE_SERIALIZER(UBuoyancyComponent) \
	/** Indicates whether the class is compiled into the engine */ \
	enum {IsIntrinsic=COMPILED_IN_INTRINSIC};


#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_STANDARD_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API UBuoyancyComponent(const FObjectInitializer& ObjectInitializer = FObjectInitializer::Get()); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(UBuoyancyComponent) \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, UBuoyancyComponent); \
DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(UBuoyancyComponent); \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API UBuoyancyComponent(UBuoyancyComponent&&); \
	NO_API UBuoyancyComponent(const UBuoyancyComponent&); \
public:


#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_ENHANCED_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API UBuoyancyComponent(const FObjectInitializer& ObjectInitializer = FObjectInitializer::Get()) : Super(ObjectInitializer) { }; \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API UBuoyancyComponent(UBuoyancyComponent&&); \
	NO_API UBuoyancyComponent(const UBuoyancyComponent&); \
public: \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, UBuoyancyComponent); \
DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(UBuoyancyComponent); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(UBuoyancyComponent)


#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_PRIVATE_PROPERTY_OFFSET
#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_30_PROLOG
#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_PRIVATE_PROPERTY_OFFSET \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_RPC_WRAPPERS \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_INCLASS \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_PRIVATE_PROPERTY_OFFSET \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_RPC_WRAPPERS_NO_PURE_DECLS \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_INCLASS_NO_PURE_DECLS \
	divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h_33_ENHANCED_CONSTRUCTORS \
static_assert(false, "Unknown access specifier for GENERATED_BODY() macro in class BuoyancyComponent."); \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID divr_Plugins_OceanPlugin_Source_OceanPlugin_Classes_BuoyancyComponent_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS