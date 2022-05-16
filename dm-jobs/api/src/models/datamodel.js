module.exports = {
  enums: [],
  models: [
    {
      name: "RW_DataMigration",
      dbName: null,
      fields: [
        {
          name: "version",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "name",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "startedAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "DateTime",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "finishedAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "DateTime",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      isGenerated: false,
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: []
    },
    {
      name: "Job",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: "Int",
          hasDefaultValue: true,
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "createdAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "DateTime",
          hasDefaultValue: true,
          default: {
            name: "now",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "title",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "description",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "price",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "Int",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "longitude",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "latitude",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "threeWords",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "status",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "timeout",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "DateTime",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "additionalAddressInformation",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      isGenerated: false,
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: []
    }
  ],
  types: []
};
